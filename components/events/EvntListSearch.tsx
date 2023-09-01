import React, { useRef } from "react";
import Button from "../ui/Button";

interface EventListSearchProps {
  onSearch: (year: string, month: string) => void;
}

const EventListSearch: React.FC<EventListSearchProps> = ({ onSearch }) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const selectedYear = yearInputRef.current?.value.toString() || "";
    const selectedMonth = monthInputRef.current?.value.toString() || "";

    onSearch(selectedYear, selectedMonth);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="m-8 mx-auto shadow-md p-4 bg-white rounded-md w-11/12 max-w-screen-md flex flex-col space-y-4"
    >
      <div className="flex flex-col items-center w-full space-y-4">
        <div className="flex flex-1 space-x-4 items-center">
          <label htmlFor="year" className="font-bold">
            Year
          </label>
          <select
            name=""
            id="year"
            ref={yearInputRef}
            className="font-normal bg-white rounded-md w-7/12 p-1"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="flex flex-1 space-x-4 items-center">
          <label htmlFor="month" className="font-bold">
            Month
          </label>
          <select
            name=""
            ref={monthInputRef}
            id="month"
            className="font-normal bg-white rounded-md w-7/12 p-1"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button onClick={() => {}}>Find Events</Button>
    </form>
  );
};

export default EventListSearch;
