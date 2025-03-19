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
  const [workoutLogs] = useState<WorkoutLog[]>(
    JSON.parse(localStorage.getItem("workoutLogs") ?? "[]")
  );
  return (
    <div>
      <h1>App Container</h1>
      <LogWorkout />
      <LoggedWorkouts workoutLogs={workoutLogs} />
    </div>
  );
};

export default AppContainer;
