const StopWatch = () => {
  return (
    <div className="inline-block text-center gap-1">
      <select className="appearance-none bg-[#5865F2] text-white text-lg font-bold px-2 py-1 rounded-lg">
        <option selected disabled>計測するタスクを選択</option>
      </select>

      <div className="bg-[#5865F2] h-56 w-56 rounded-full flex items-center justify-center mt-3">
        <div className="bg-[#000] h-48 w-48 rounded-full flex items-center justify-center relative">
          <p className="text-white text-5xl font-bold" style={{ fontFamily: 'DigitalFont' }}>00:00:00</p>
          <button className="absolute text-black font-bold bg-[#fff] rounded bottom-6 px-5 py-1">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
