import EscapeButton from '../_components/EscapeButton';

const PostList = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-between items-center w-full pl-20 pr-12 pt-10'>
        <div className='flex-shrink-0 mr-auto pl-12'>
          <span className='font-bold text-2xl'>全30件 (2024年1月1日 ～ 2024年1月31日)</span>
        </div>
        <div className='ml-auto'>
          <button className='bg-white text-2xl font-medium py-1 px-2'>新</button>
          <button className='text-white text-2xl font-medium bg-accent2 rounded-full py-1 px-2'>古</button>
        </div>
        <div className='pl-6 pb-10'>
          <EscapeButton />
        </div>
      </div>
      <div className='flex justify-center h-[450px] my-2'>
        <div className='w-[787px] mx-10 flex-shrink-0'>
          <div className="container bg-accent1 mx-auto p-7 border-b-2">
            <div className="flex items-center rounded font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習時間
              </div>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                10
              </span>
              <span className="font-semibold px-3">時間</span>
              <span className='ml-auto font-semibold'>【投稿日】2024年1月9日</span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7 pb-7 border-b-2">
            <div className="flex items-center text-lg font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習内容
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                QUEST
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                AtCoder
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                Paiza
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                チーム開発
              </span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7">
            <div className="flex items-start font-medium">
              <div>
                <div className="text-white text-lg bg-accent2 py-2 px-4 mr-5 rounded">
                  コメント
                </div>
              </div>
              <span
                className="w-[75%] h-[100px] outline-none text-black font-normal text-xl bg-white py-2 px-4"
              ></span>
            </div>
          </div>
        </div>
        <div className='w-[787px] mx-10 flex-shrink-0'>
          <div className="container bg-accent1 mx-auto p-7 border-b-2">
            <div className="flex items-center text-lg font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習時間
              </div>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                10
              </span>
              <span className="font-semibold px-3">時間</span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7 pb-7 border-b-2">
            <div className="flex items-center text-lg font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習内容
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                QUEST
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                AtCoder
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                Paiza
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                チーム開発
              </span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7">
            <div className="flex items-start font-medium">
              <div>
                <div className="text-white text-lg bg-accent2 py-2 px-4 mr-5 rounded">
                  コメント
                </div>
              </div>
              <span
                className="w-[75%] h-[100px] outline-none text-black font-normal text-xl bg-white py-2 px-4"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center h-[450px] my-2'>
        <div className='w-[787px] mx-10 flex-shrink-0'>
          <div className="container bg-accent1 mx-auto p-7 border-b-2">
            <div className="flex items-center rounded font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習時間
              </div>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                10
              </span>
              <span className="font-semibold px-3">時間</span>
              <span className='ml-auto font-semibold'>【投稿日】2024年1月9日</span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7 pb-7 border-b-2">
            <div className="flex items-center text-lg font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習内容
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                QUEST
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                AtCoder
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                Paiza
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                チーム開発
              </span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7">
            <div className="flex items-start font-medium">
              <div>
                <div className="text-white text-lg bg-accent2 py-2 px-4 mr-5 rounded">
                  コメント
                </div>
              </div>
              <span
                className="w-[75%] h-[100px] outline-none text-black font-normal text-xl bg-white py-2 px-4"
              ></span>
            </div>
          </div>
        </div>
        <div className='w-[787px] mx-10 flex-shrink-0'>
          <div className="container bg-accent1 mx-auto p-7 border-b-2">
            <div className="flex items-center text-lg font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習時間
              </div>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                10
              </span>
              <span className="font-semibold px-3">時間</span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7 pb-7 border-b-2">
            <div className="flex items-center text-lg font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習内容
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                QUEST
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                AtCoder
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                Paiza
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                チーム開発
              </span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7">
            <div className="flex items-start font-medium">
              <div>
                <div className="text-white text-lg bg-accent2 py-2 px-4 mr-5 rounded">
                  コメント
                </div>
              </div>
              <span
                className="w-[75%] h-[100px] outline-none text-black font-normal text-xl bg-white py-2 px-4"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center h-[450px] my-2'>
        <div className='w-[787px] mx-10 flex-shrink-0'>
          <div className="container bg-accent1 mx-auto p-7 border-b-2">
            <div className="flex items-center rounded font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習時間
              </div>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                10
              </span>
              <span className="font-semibold px-3">時間</span>
              <span className='ml-auto font-semibold'>【投稿日】2024年1月9日</span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7 pb-7 border-b-2">
            <div className="flex items-center text-lg font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習内容
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                QUEST
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                AtCoder
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                Paiza
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                チーム開発
              </span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7">
            <div className="flex items-start font-medium">
              <div>
                <div className="text-white text-lg bg-accent2 py-2 px-4 mr-5 rounded">
                  コメント
                </div>
              </div>
              <span
                className="w-[75%] h-[100px] outline-none text-black font-normal text-xl bg-white py-2 px-4"
              ></span>
            </div>
          </div>
        </div>
        <div className='w-[787px] mx-10 flex-shrink-0'>
          <div className="container bg-accent1 mx-auto p-7 border-b-2">
            <div className="flex items-center text-lg font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習時間
              </div>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                10
              </span>
              <span className="font-semibold px-3">時間</span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7 pb-7 border-b-2">
            <div className="flex items-center text-lg font-medium">
              <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
                学習内容
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                QUEST
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                AtCoder
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                Paiza
              </span>
              <span className="bg-white text-black text-lg font-semibold py-2 px-4 rounded">
                チーム開発
              </span>
            </div>
          </div>
          <div className="container bg-accent1 mx-auto p-7">
            <div className="flex items-start font-medium">
              <div>
                <div className="text-white text-lg bg-accent2 py-2 px-4 mr-5 rounded">
                  コメント
                </div>
              </div>
              <span
                className="w-[75%] h-[100px] outline-none text-black font-normal text-xl bg-white py-2 px-4"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;