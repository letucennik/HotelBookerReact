import DestinationField from "./DestinationField";
import DateField from "./DateField";
import GuestField from "./GuestField";
import { useState, useEffect } from "react";
import { api } from "../api";

function SearchBar() {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [adults, setAdults] = useState(2);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);

  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    api
      .get<Destination[]>("/api/v1/destinations")
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.error("Failed to load destinations", error);
      });
  }, []);

  const submit = () => {};
  return (
    <form
      onSubmit={submit}
      className="flex absolute z-50 top-1/2 left-[15%] justify-between gap-3 items-stretch px-5 py-5 bg-white rounded-3xl "
    >
      <DestinationField
        destinations={destinations}
        value={destination}
        onChange={setDestination}
      />
      <DateField
        date={checkInDate}
        onChangeDate={setCheckInDate}
        title="Check In"
      />
      <DateField
        date={checkOutDate}
        onChangeDate={setCheckOutDate}
        title="Check Out"
      />
      <GuestField
        rooms={1}
        adults={adults}
        childrenAges={childrenAges}
        setAdults={setAdults}
        setChildrenAges={setChildrenAges}
      />
      <button
        type="submit"
        className="bg-[#111] text-white rounded-[4px]  px-8 py-3 cursor-pointer font-outfit font-medium transition:all 0.3s hover:bg-[#333] h-[48px] w-[116px] "
      >
        Search
      </button>
    </form>
  );
}

type Destination = {
  id: string;
  name: string;
  label: string;
};

export default SearchBar;
