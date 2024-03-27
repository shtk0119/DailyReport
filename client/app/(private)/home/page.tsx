import Link from 'next/link';
import Calender from '../_components/Calender';

export default function Home() {
  return (
    <div className='flex'>
      <div className='py-5 px-10'>
        <Calender />
      </div>
      <div className="w-full h-screen">
        <Link href="/task">
          <button className="text-3xl tracking-widest w-1/4 px-6 py-6 text-white bg-accent2 rounded hover:bg-green-700 relative top-[5%] left-[65%]">
            タスク管理
          </button>
        </Link>

        <Link href="/post">
          <button className="text-3xl tracking-widest w-1/4 px-6 py-6 text-white bg-accent2 rounded hover:bg-green-700 relative top-[20%] left-[40%]">
            日報投稿
          </button>
        </Link>
      </div>
    </div>
  );
};
