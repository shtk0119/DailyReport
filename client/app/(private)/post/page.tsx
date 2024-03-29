import React from 'react';
import EscapeButton from '../_components/EscapeButton';

const PostForm = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-10">
        <EscapeButton />
      </div>
      <form>
        <div className="container bg-accent1 mx-auto mt-10 p-7 border-b-2">
          <div className="flex items-center text-2xl font-medium">
            <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
              学習時間
            </div>
            <input
              type="text"
              className="outline-none text-center w-14 py-1 mr-4"
            ></input>
            <span className="font-semibold">時間</span>
          </div>
        </div>
        <div className="container bg-accent1 mx-auto p-7 pb-7 border-b-2">
          <div className="flex items-center text-2xl font-medium">
            <div className="text-white bg-accent2 py-2 px-4 mr-10 rounded">
              学習内容
            </div>
            <select className="text-black font-semibold bg-white text-xl py-2 px-12">
              <option value="QUEST">QUEST</option>
              <option value="AtCoder">AtCoder</option>
              <option value="Paiza">Paiza</option>
              <option value="チーム開発">チーム開発</option>
              <option value="ここから選択" selected>
                ここから選択
              </option>
            </select>
          </div>
          <div className="flex flex-wrap gap-3 mt-7">
            <span className="bg-white text-black text-xl font-semibold py-2 px-4 rounded">
              QUEST
            </span>
            <span className="bg-white text-black text-xl font-semibold py-2 px-4 rounded">
              AtCoder
            </span>
            <span className="bg-white text-black text-xl font-semibold py-2 px-4 rounded">
              Paiza
            </span>
            <span className="bg-white text-black text-xl font-semibold py-2 px-4 rounded">
              チーム開発
            </span>
          </div>
        </div>
        <div className="container bg-accent1 mx-auto p-7">
          <div className="flex items-start font-medium">
            <div>
              <div className=" text-white text-2xl bg-accent2 py-2 px-4 mr-10 rounded">
                コメント
              </div>
              <button className=" text-white bg-main rounded-full py-2 px-6 mt-28">
                AI自動修正
              </button>
            </div>
            <textarea
              placeholder="コメントを入力"
              className="w-3/5 h-52 outline-none text-black font-normal text-xl bg-white py-2 px-4"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-evenly text-white text-2xl mt-16">
          <input
            type="submit"
            value="Discordへ投稿"
            className=" bg-main py-4 px-6 basis-1/6 rounded-2xl"
          ></input>
          <input
            type="submit"
            value="Xへ投稿"
            className="bg-black py-4 px-6 basis-1/6 rounded-2xl"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
