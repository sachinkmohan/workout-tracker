const HomeScreen = () => {
  return (
    <div className="w-9/10 p-3 border border-indigo-400 rounded-xl mx-auto">
      <div className="flex  flex-col justify-between ">
        <div className="flex gap-3 mb-3">
          <span>x</span>
          <p>Strength-Total</p>
        </div>

        <div className="flex gap-2 mb-3">
          {["5m", "10m", "20m", "30m", "45m"].map((value) => (
            <label key={value} className="flex gap-2">
              <input type="radio" name="duration" value={value} />
              <span>{value}</span>
            </label>
          ))}
        </div>

        <button className="bg-blue-300 text-white px-3 py-1 rounded-md">
          Log
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
