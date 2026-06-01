import { useState } from "react";
const GuestField = ({
  rooms,
  adults,
  childrenAges,
  setAdults,
  setChildrenAges,
}: GuestFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const children = childrenAges.length;
  const guestsCount = adults + children;

  const decreaseAdults = () => {
    setAdults((prev) => Math.max(1, prev - 1));
  };

  const increaseAdults = () => {
    setAdults((prev) => prev + 1);
  };

  const addChildAge = (age: number) => {
    setChildrenAges((prev) => [...prev, age]);
  };
  return (
    <div className="relative font-outfit">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-3 rounded-[8px] border border-gray-300 px-4 py-2 text-sm text-black transition-all duration-300 hover:bg-gray-100"
      >
        <span>
          {rooms} {rooms === 1 ? "room" : "rooms"} for {guestsCount}{" "}
          {guestsCount === 1 ? "guest" : "guests"}
        </span>
        <span>▾</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-60 mt-2 w-[285px] rounded-[8px] bg-white px-4 py-4 text-black shadow-xl">
          <h3 className="mb-3 text-base font-semibold">
            {rooms} {rooms === 1 ? "room" : "rooms"}
          </h3>

          <div className="mb-3 grid grid-cols-2 gap-3">
            <div>
              <div className="mb-1 text-xs font-semibold">Adults</div>

              <div className="flex h-[34px] items-center justify-between rounded-[8px] border border-gray-200 px-3">
                <button
                  type="button"
                  onClick={decreaseAdults}
                  className="cursor-pointer text-xl leading-none"
                >
                  -
                </button>

                <span className="text-sm">{adults}</span>

                <button
                  type="button"
                  onClick={increaseAdults}
                  className="cursor-pointer text-xl leading-none"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <div className="mb-1 text-xs font-semibold">Children</div>

              <div className="flex flex-wrap gap-2">
                {childrenAges.length > 0 ? (
                  childrenAges.map((age, index) => (
                    <button
                      key={`${age}-${index}`}
                      type="button"
                      onClick={() => {
                        setChildrenAges((prev) =>
                          prev.filter((_, childIndex) => childIndex !== index),
                        );
                      }}
                      className="flex h-[34px] min-w-[62px] cursor-pointer items-center justify-center rounded-[8px] border border-gray-200 bg-gray-50 px-3 text-sm transition-all duration-300 hover:bg-gray-100"
                    >
                      {age} {age === 1 ? "year" : "years"}
                    </button>
                  ))
                ) : (
                  <div className="text-sm text-gray-400">No children</div>
                )}
              </div>
            </div>
          </div>

          <select
            defaultValue=""
            onChange={(event) => {
              const value = event.target.value;

              if (value === "") return;

              if (value === "no-children") {
                setChildrenAges([]);
                event.target.value = "";
                return;
              }

              addChildAge(Number(value));
              event.target.value = "";
            }}
            className="mb-3 h-[34px] w-full cursor-pointer rounded-[8px] border border-gray-200 px-3 text-sm outline-none"
          >
            <option value="">Add child</option>
            <option value="no-children">No children</option>
            <option value="0">0 years</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
          </select>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="h-[34px] w-full cursor-pointer rounded-[6px] bg-[#49b9ff] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2ea7f0]"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

type GuestFieldProps = {
  rooms: number;
  adults: number;
  childrenAges: Array<number>;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildrenAges: React.Dispatch<React.SetStateAction<number[]>>;
};

export default GuestField;
