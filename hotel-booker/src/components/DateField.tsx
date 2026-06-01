import dateIcon from "../assets/date.svg";
import Calendar from "react-calendar";
import "./calendar.css";
import { useState } from "react";

function DateField({ date, onChangeDate, title }: DateFieldProps) {
  const [calendarVisible, setCalendarVisibleState] = useState(false);

  return (
    <div
      onClick={() => {
        setCalendarVisibleState((prev) => !prev);
      }}
      className="relative z-15 flex h-[48px] w-[140px] cursor-pointer flex-col justify-between"
    >
      <div className="flex items-center gap-1.5">
        <img className="h-4 w-4 object-contain" src={dateIcon} alt="" />
        <span className="font-outfit text-sm text-gray-400">{title}</span>
      </div>

      <input
        className="w-full cursor-pointer border-none bg-transparent p-0 font-outfit text-sm text-black outline-none focus:outline-none"
        type="text"
        value={date.toDateString()}
        readOnly
      />

      {calendarVisible && (
        <div
          onClick={(event) => event.stopPropagation()}
          className="absolute left-0 top-[calc(100%+16px)] z-50"
        >
          <Calendar
            value={date}
            onChange={(value) => {
              if (value instanceof Date) {
                onChangeDate(value);
              }

              setCalendarVisibleState(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

type DateFieldProps = {
  date: Date;
  onChangeDate: (value: Date) => void;
  title: string;
};

export default DateField;
