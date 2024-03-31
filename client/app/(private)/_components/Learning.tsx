'use client';

import { useFetch } from "@/hooks/useFetch";
import { TimerIcon } from "./TimerIcon";

const Learning = () => {
  const { data: users } = useFetch<UsersResponse, User[]>('http://localhost/api/learning-user', 'users');

  return (
    <div className="inline-block">
      <div className="bg-[#5865F2] px-16 py-2 flex justify-center gap-3">
        <p className="text-white font-bold">計測中</p>
        <p className="text-white font-bold">{users?.length}人</p>
      </div>
      <div className="bg-[#F6F6F6] p-4 max-h-54 overflow-scroll">
        <ul className="grid gap-3">
          {users?.map((user) =>
            <li key={user.id} className="bg-white flex items-center justify-center gap-6 py-2 rounded-lg">
              <TimerIcon />
              <p className="text-xl font-bold">{user.name}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Learning;
