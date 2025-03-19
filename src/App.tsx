import "./App.css";

import LogWorkout from "./components/LogWorkout";
import LoggedWorkouts from "./components/LoggedWorkouts";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div>
      <AppHeader />
      <LogWorkout />
      <LoggedWorkouts />
    </div>
  );
}

export default App;
