import destinationIcon from "../assets/destination.svg";

function DestinationField({
  destinations,
  value,
  onChange,
}: DestinationFieldProps) {
  const selectedDestination = destinations.find(
    (destination) => destination.name === value,
  );

  return (
    <div className="relative cursor-pointer flex h-[48px] w-[150px] flex-col justify-between">
      <div className="flex items-center gap-1.5">
        <img className="h-4 w-4 object-contain" src={destinationIcon} alt="" />

        <span className="font-outfit text-sm text-gray-400">Destination</span>
      </div>

      <div className="mt-1.5 font-outfit text-sm font-normal text-black">
        {selectedDestination?.label || "Select a destination..."}
      </div>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
      >
        {destinations.map((destination) => (
          <option key={destination.id} value={destination.name}>
            {destination.label}
          </option>
        ))}
      </select>
    </div>
  );
}

type DestinationFieldProps = {
  destinations: Array<Destination>;
  value: string;
  onChange: (value: string) => void;
};

type Destination = {
  id: string;
  name: string;
  label: string;
};

export default DestinationField;
