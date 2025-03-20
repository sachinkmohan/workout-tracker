import { useState } from "react";
import LogWorkout from "./LogWorkout";
import LoggedWorkouts from "./LoggedWorkouts";

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
  return (
    <div>
      <h1>App Container</h1>
      <LogWorkout onLogWorkout={refreshWorkoutLogs} />
      <LoggedWorkouts
        workoutLogs={workoutLogs}
        onWorkoutsUpdated={refreshWorkoutLogs}
      />
    </div>
  );
};

export default AppContainer;
