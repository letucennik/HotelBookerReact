import logo from "../assets/logo_first.svg";
import searchIcon from "../assets/search_icon.svg";
import userIcon from "../assets/userIcon.svg";
function Header() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Hotels", href: "#" },
    { label: "Experiences", href: "#" },
    { label: "About", href: "#" },
  ];
  return (
    <header className="absolute top-0 left-0 z-2 w-full">
      <div className="mx-auto max-w-340 px-6 py-6 md:px-12 lg:px-22.5">
        <div className="w-full flex justify-between items-center bg-transparent text-white">
          <div>
            <img
              className="block w-full h-full object-contain cursor-pointer"
              src={logo}
              alt="Logo"
            />
          </div>

          <nav className="flex gap-7.5">
            {navItems.map((item) => (
              <a
                key={`${item.href}-${item.label}`}
                className="cursor-pointer font-outfit font-medium transition:all 0.3s hover:text-blue-300"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-7.5">
            <button className="cursor-pointer px-1.5 py-1.5">
              <img
                className="w-5 h-5 opacity-80 transition-all duration-300 hover:opacity-100"
                src={searchIcon}
                alt="search"
              />
            </button>
            <button className="cursor-pointer px-1.5 py-1.5">
              <img
                className="w-5 h-5 opacity-80 transition-all duration-300 hover:opacity-100"
                src={userIcon}
                alt="user"
              />
            </button>
            <button className="bg-[#111] text-white rounded-[20px] px-8 py-3 cursor-pointer font-outfit font-medium transition:all 0.3s hover:bg-[#333]">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
