"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef, useState } from "react";
import { MenuIcon } from "./MenuIcon";
import Link from "next/link";

const Calender = () => {
	const [isListOpen, setIsListOpen] = useState(false);
	const pullDownList = useRef(null);

  const pullDownDisplay = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <div className="w-[950px] my-2">
      <div className="flex justify-between items-center bg-[#5865F2] py-3 text-white px-5">
        <h1 className="text-2xl">User1</h1>
        <div className="text-black" id="page-select">
          <button
            onClick={pullDownDisplay}
            className=" py-1 px-3 rounded-lg relative z-1"
          >
            <MenuIcon />
          </button>
          <ul
            className={`absolute z-10 bg-[#f6f6f6] px-3 py-2 mt-2 rounded-lg shadow-md w-48 ${
              isListOpen ? "block" : "hidden"
            }`}
            ref={pullDownList}
          >
            <li>
              <Link href="/postList">投稿一覧</Link>
            </li>
            <li>
              <Link href="/record">学習時間グラフ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-5 bg-[#f6f6f6]">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          height={"495px"}
          aspectRatio={1}
        />
      </div>
    </div>
  );
};

export default Calender;
