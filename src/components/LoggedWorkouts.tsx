import { formatDistance, parseISO } from "date-fns";
import { useState } from "react";
import { GrUndo } from "react-icons/gr";
import { toast } from "react-toastify";

type WorkoutLog = {
  id: string;
  workoutName: string;
  logDate: string;
  duration: string;
};

interface LoggedWorkoutsProps {
  workoutLogs: WorkoutLog[];
  onWorkoutsUpdated: () => void;
}
const LoggedWorkouts = ({
  workoutLogs,
  onWorkoutsUpdated,
}: LoggedWorkoutsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const removeLastItem = () => {
    const updatedLogs = workoutLogs.slice(1);

    localStorage.setItem("workoutLogs", JSON.stringify(updatedLogs));
    toast.error("Last Workout Removed");
    onWorkoutsUpdated();
  };

  const toggleExpandItems = () => {
    setIsExpanded((prev) => !prev);
  };

  const getDisplayedLogs = () => {
    if (workoutLogs?.length === 0) {
      return <p>Flex that muscle & log a Workout </p>;
    } else if (isExpanded) {
      return workoutLogs?.map(renderLogItem);
    }
    return workoutLogs?.slice(0, 10).map(renderLogItem);
  };

  const renderLogItem = (log: WorkoutLog) => (
    <div
      key={log.id}
      className="p-2 mb-2 flex justify-between bg-white border border-gray-200 rounded-lg "
    >
      <div className="flex flex-col items-start">
        <p>{log.workoutName}</p>
        <p>{log.duration}</p>
      </div>
      <p className="flex justify-center items-center">
        {formatDistance(parseISO(log.logDate), new Date(), {
          addSuffix: true,
        })}
      </p>
    </div>
  );

  return (
    <div className="py-4 ">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold ">Recent Workouts</h2>
        <div className="flex gap-4 items-center">
          <GrUndo onClick={removeLastItem} />
          <button
            className="text-blue-600 active:scale-95 transition"
            onClick={toggleExpandItems}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      {getDisplayedLogs()}
    </div>
  );
};

export default LoggedWorkouts;
