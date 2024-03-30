import Image from "next/image";
import Link from "next/link";

const Top = () => {
  return (
    <div className='h-full bg-[#5865F2] flex gap-5 px-16 py-24'>
      <div className="w-full">
        <div className="flex gap-3 items-center mb-16">
          <Image src={'./logos/Logo_v1.svg'} alt="ロゴ" height={50} width={50} />
          <h1 className="text-white text-4xl font-bold">
            デイリポ+
          </h1>
        </div>
        <h2 className="text-white text-5xl font-bold mb-6">
          日報投稿に<br />
          +αの価値を提供する
        </h2>
        <p className="text-white font-bold mb-20">アプレンティス生のための日報おたすけアプリ</p>

        <div className="flex gap-6">
          <Link href='/register'>
            <button className="text-white font-bold bg-[#1E1F22] px-20 py-4 rounded">新規登録</button>
          </Link>
          <Link href='/login'>
            <button className="text-white font-bold bg-[#1E1F22] px-20 py-4 rounded">ログイン</button>
          </Link>
        </div>
      </div>
      <div className="w-full flex">
        <Image src={'./logos/discord_white.svg'} alt="ロゴ" height={500} width={500} />
      </div>
    </div>
  );
};

export default Top;
