import { FaDumbbell } from "react-icons/fa";

const AppHeader = () => {
  return (
    <header>
      <div className="flex gap-1 py-3">
        <FaDumbbell className="text-xl pt-1" />
        <h1>FitTrack</h1>
      </div>
    </header>
  );
};

export default AppHeader;
