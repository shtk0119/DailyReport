import { TimerIcon } from "./TimerIcon";

const Learning = () => {
  return (
    <div className="inline-block">
      <div className="bg-[#5865F2] px-14 py-2 flex justify-center gap-3">
        <p className="text-white font-bold">計測中</p>
        <p className="text-white font-bold">xx人</p>
      </div>
      <div className="bg-[#F6F6F6] p-4 max-h-48 overflow-scroll">
        <ul className="grid gap-3">
          <li className="bg-white flex items-center justify-center gap-6 py-2 rounded-lg">
            <TimerIcon />
            <p className="text-xl font-bold">User 1</p>
          </li>
          <li className="bg-white flex items-center justify-center gap-6 py-2 rounded-lg">
            <TimerIcon />
            <p className="text-xl font-bold">User 1</p>
          </li>
          <li className="bg-white flex items-center justify-center gap-6 py-2 rounded-lg">
            <TimerIcon />
            <p className="text-xl font-bold">User 1</p>
          </li>
          <li className="bg-white flex items-center justify-center gap-6 py-2 rounded-lg">
            <TimerIcon />
            <p className="text-xl font-bold">User 1</p>
          </li>
          <li className="bg-white flex items-center justify-center gap-6 py-2 rounded-lg">
            <TimerIcon />
            <p className="text-xl font-bold">User 1</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Learning;
