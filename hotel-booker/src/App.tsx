import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const response = await api.post("/api/auth/login", {
          username: "admin",
          password: "admin123",
        });

        localStorage.setItem("accessToken", response.data.token);

        setIsAuthReady(true);
      } catch (error) {
        console.error("Login failed", error);
      }
    };

    initAuth();
  }, []);

  if (!isAuthReady) {
    return null; // или loader
  }
  return <HomePage />;
}

export default App;
