import { formatDistance, parseISO } from "date-fns";
import { GrUndo } from "react-icons/gr";

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
  const removeLastItem = () => {
    const updatedLogs = workoutLogs.slice(1);

    localStorage.setItem("workoutLogs", JSON.stringify(updatedLogs));
    onWorkoutsUpdated();
  };

  return (
    <div className="py-4 ">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold ">Recent Workouts</h2>
        <GrUndo onClick={removeLastItem} />
      </div>

      {workoutLogs?.length === 0 ? (
        <p>Flex that muscle & log a Workout </p>
      ) : (
        workoutLogs?.map((log) => (
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
        ))
      )}
    </div>
  );
};

export default LoggedWorkouts;
