const LoggedWorkouts = () => {
  return (
    <div>
      <h2>Logged Workouts</h2>
      <div className="p-2 flex justify-between border border-gray-200 rounded-lg ">
        <div className="flex flex-col items-start">
          <p>Yoga</p>
          <p>30 minutes</p>
        </div>
        <p className="flex justify-center items-center">yesterday</p>
      </div>
    </div>
  );
};

export default LoggedWorkouts;
