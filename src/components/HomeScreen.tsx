import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaBeer } from "react-icons/fa";

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClickCalender = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-9/10 p-3 border border-indigo-400 rounded-xl mx-auto">
      <div className="flex  flex-col justify-between ">
        <div className="mb-3">
          <select className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <option value="Strength-Total">Strength-Total</option>
            <option value="Strength-Upper">Strength-Upper</option>
            <option value="Strength-Lower">Strength-Lower</option>
            <option value="Yoga">Yoga</option>
            <option value="Abs">Abs</option>
          </select>
          <button onClick={handleClickCalender}>
            <FaBeer />
          </button>
          {isOpen && (
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy h:mm aa"
              showTimeInput
              inline
            />
          )}
        </div>

        <div className="flex gap-2 mb-3">
          {["5m", "10m", "20m", "30m", "45m"].map((value) => (
            <label key={value} className="flex gap-2">
              <input type="radio" name="duration" value={value} />
              <span>{value}</span>
            </label>
          ))}
        </div>

        <button className="bg-blue-300 text-white px-3 py-1 rounded-md">
          Log
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
