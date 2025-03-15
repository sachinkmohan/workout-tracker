import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { IoIosFlash } from "react-icons/io";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

type WorkoutLog = {
  id: string;
  workoutName: string;
  logDate: string;
  duration: string;
};

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [workoutType, setWorkoutType] = useState("Strength-Total");
  const [duration, setDuration] = useState("5m");
  const [isOpen, setIsOpen] = useState(false);

  const handleClickCalender = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleWorkoutTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWorkoutType(e.target.value);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(e.target.value);
  };

  const logWorkout = () => {
    const existingLogs = JSON.parse(
      localStorage.getItem("workoutLogs") ?? "[]"
    );

    const newLog: WorkoutLog = {
      id: uuidv4(),
      workoutName: workoutType,
      logDate: selectedDate?.toISOString() ?? "",
      duration: duration,
    };

    const updatedLogs = [...existingLogs, newLog];

    localStorage.setItem("workoutLogs", JSON.stringify(updatedLogs));
  };

  return (
    <div className="md:max-w-[600px] p-3 border border-gray-200 rounded-xl mx-auto bg-white">
      <div className="flex flex-col">
        <div className="mb-3 md:flex md:justify-items-start md:gap-4 ">
          <select
            value={workoutType}
            onChange={handleWorkoutTypeChange}
            className="w-full md:w-1/3 border border-gray-300 rounded-md mb-3 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="Strength-Total">Strength-Total</option>
            <option value="Strength-Upper">Strength-Upper</option>
            <option value="Strength-Lower">Strength-Lower</option>
            <option value="Yoga">Yoga</option>
            <option value="Abs">Abs</option>
          </select>

          <div className=" md:w-1/3 mb-3 flex md:justify-items-start gap-2">
            <div className="relative flex-1 md:flex-none">
              <button
                onClick={handleClickCalender}
                className="w-full md:w-auto flex justify-center border border-gray-300 rounded-md px-3 py-1 "
              >
                {format(selectedDate, "dd-MM-yy hh:mm")}
              </button>
              {isOpen && (
                <div className="absolute">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy h:mm aa p"
                    showTimeInput
                    inline
                  />
                </div>
              )}
            </div>
            <div className="flex-1 md:flex-none">
              <button className="w-full md:w-auto border border-gray-300 rounded-md px-3  py-1 flex justify-center">
                <IoIosFlash className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 mb-3">
          {["5m", "10m", "20m", "30m", "45m"].map((value) => (
            <label key={value} className="flex gap-2">
              <input
                type="radio"
                name="duration"
                value={value}
                checked={duration === value}
                onChange={handleDurationChange}
              />
              <span>{value}</span>
            </label>
          ))}
        </div>

        <button
          onClick={logWorkout}
          className="w-full bg-blue-300 text-white px-3 py-1 rounded-md"
        >
          Log
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
