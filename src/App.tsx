import { useState } from "react";
import "./App.css";

import HomeScreen from "./components/HomeScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-10">
      <HomeScreen />
    </div>
  );
}

export default App;
