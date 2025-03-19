type WorkoutLog = {
  id: string;
  workoutName: string;
  logDate: string;
  duration: string;
};

interface LoggedWorkoutsProps {
  workoutLogs: WorkoutLog[];
}
const LoggedWorkouts = ({ workoutLogs }: LoggedWorkoutsProps) => {
  return (
    <div>
      <h2>Logged Workouts</h2>
      {workoutLogs?.length === 0 ? (
        <p>Flex that muscle & log a Workout </p>
      ) : (
        workoutLogs?.map((log) => (
          <div
            key={log.id}
            className="p-2 flex justify-between border border-gray-200 rounded-lg "
          >
            <div className="flex flex-col items-start">
              <p>{log.workoutName}</p>
              <p>{log.duration}</p>
            </div>
            <p className="flex justify-center items-center">{log.logDate}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default LoggedWorkouts;
