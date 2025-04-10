import { useEffect, useState } from "react";
import LogWorkout from "./LogWorkout";
import LoggedWorkouts from "./LoggedWorkouts";
import { ToastContainer } from "react-toastify";

type WorkoutLog = {
  id: string;
  workoutName: string;
  logDate: string;
  duration: string;
};

const AppContainer = () => {
  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>(
    JSON.parse(localStorage.getItem("workoutLogs") ?? "[]")
  );

  const refreshWorkoutLogs = () => {
    setWorkoutLogs(JSON.parse(localStorage.getItem("workoutLogs") ?? "[]"));
  };

  useEffect(() => {
    const handleDataImported = () => {
      refreshWorkoutLogs();
    };
    window.addEventListener("workoutDataImported", handleDataImported);
    return () => {
      window.removeEventListener("workoutDataImported", handleDataImported);
    };
  }, []);

  return (
    <div>
      <LogWorkout onLogWorkout={refreshWorkoutLogs} />
      <LoggedWorkouts
        workoutLogs={workoutLogs}
        onWorkoutsUpdated={refreshWorkoutLogs}
      />
      <ToastContainer closeOnClick={true} />
    </div>
  );
};

export default AppContainer;
