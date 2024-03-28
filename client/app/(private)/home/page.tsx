"use client";
import Link from "next/link";
import useSWR from "swr";
import Calender from "../_components/Calender";
import { CommentIcon } from "../_components/CommentIcon";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("データの取得に失敗しました。");
  }
  return response.json();
};

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost/api/not-posted",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex w-full h-screen">
      <div className="py-5 px-10">
        <Calender />
        <div className="mt-5">
          <h2 className="text-white text-xl font-semibold text-center py-2 mb-3 bg-main ">
            本日の未投稿ユーザー
            <span className="text-white text-xl font-semibold ml-5">
              {data.length}人
            </span>
          </h2>
          <div className="bg-accent1 pb-3">
            <div className="flex flex-wrap gap-3 ">
              {data.map((user: { id: number; name: string }) => (
                <span
                  key={user.id}
                  className="flex items-center bg-white text-black font-semibold py-2 px-4 rounded"
                >
                  <CommentIcon className="fill-main mr-2" />
                  {user.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link href="/task">
          <button className="text-3xl tracking-widest text-center px-6 py-6 my-10 text-white bg-accent2 rounded hover:bg-green-600">
            タスク管理
          </button>
        </Link>

        <Link href="/post">
          <button className="text-3xl tracking-widest text-center px-10 py-6 text-white bg-accent2 rounded hover:bg-green-600">
            日報投稿
          </button>
        </Link>
      </div>
    </div>
  );
}
