'use client';

import Link from 'next/link';
import useSWR from 'swr';
import Calender from '../_components/Calender';
import { CommentIcon } from '../_components/CommentIcon';
import StopWatch from '../_components/StopWatch';
import Learning from '../_components/Learning';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('データの取得に失敗しました。');
  }
  return response.json();
};

export default function Home() {
  const { data, error, isLoading } = useSWR(
    'http://localhost/api/not-posted',
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex justify-center gap-10 px-16 py-8">
      <div>
        <Calender />
        <div className="mt-5 w-[800px]">
          <h2 className="text-white text-xl font-semibold text-center py-2 bg-main">
            本日の未投稿ユーザー
            <span className="text-white text-xl font-semibold ml-5">
              {data.length}人
            </span>
          </h2>
          <div className="bg-accent1 p-4">
            <div className="flex flex-wrap gap-3">
              {data.map((user: { id: number; name: string }) => (
                <span
                  key={user.id}
                  className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded"
                >
                  <CommentIcon className="fill-main" />
                  {user.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='grid justify-center gap-10'>
          <Link href="/task">
            <button className="text-3xl tracking-widest text-center px-12 py-6 text-white bg-accent2 rounded-lg hover:bg-green-600 font-bold w-72">
              タスク管理
            </button>
          </Link>
          <Link href="/post">
            <button className="text-3xl tracking-widest text-center px-12 py-6 text-white bg-accent2 rounded-lg hover:bg-green-600 font-bold w-72">
              日報投稿
            </button>
          </Link>
        </div>
        <div className='flex items-center gap-12 mt-20'>
          <StopWatch />
          <Learning />
        </div>
      </div>
    </div>
  );
};
