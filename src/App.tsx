import "./App.css";

import LoggedWorkouts from "./components/LoggedWorkouts";
import AppHeader from "./components/AppHeader";
import AppContainer from "./components/AppContainer";

function App() {
  return (
    <div>
      <AppHeader />
      <AppContainer />
      <LoggedWorkouts />
    </div>
  );
}

export default App;
