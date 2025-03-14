import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaBeer, FaAccusoft } from "react-icons/fa";

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClickCalender = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:max-w-[600px] p-3 border border-gray-200 rounded-xl mx-auto bg-white">
      <div className="flex flex-col">
        <div className="mb-3 md:flex md:justify-items-start md:gap-4 ">
          <select className="w-full md:w-1/3 border border-gray-300 rounded-md mb-3 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <option value="Strength-Total">Strength-Total</option>
            <option value="Strength-Upper">Strength-Upper</option>
            <option value="Strength-Lower">Strength-Lower</option>
            <option value="Yoga">Yoga</option>
            <option value="Abs">Abs</option>
          </select>

          <div className="w-full md:w-1/3 mb-3 flex md:justify-items-start gap-2">
            <button
              onClick={handleClickCalender}
              className="w-full md:w-auto flex justify-center border border-gray-300 rounded-md px-3 py-1 "
            >
              <FaBeer className="text-lg" />
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
            <button className="w-full md:w-auto border border-gray-300 rounded-md px-3  py-1 flex justify-center">
              <FaAccusoft className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 mb-3">
          {["5m", "10m", "20m", "30m", "45m"].map((value) => (
            <label key={value} className="flex gap-2">
              <input type="radio" name="duration" value={value} />
              <span>{value}</span>
            </label>
          ))}
        </div>

        <button className="w-full bg-blue-300 text-white px-3 py-1 rounded-md">
          Log
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
