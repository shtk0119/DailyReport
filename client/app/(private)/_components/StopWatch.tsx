'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const StopWatch = () => {
  const [selectValue, setSelectValue] = useState('');
  const [record, setRecord] = useState(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const http = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
  });

  // ログインユーザーIDに変更
  const { data: tasks } = useSWR('http://localhost/api/tasks/1', fetcher);

  const formatTime = (totalSeconds: any) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    // HH:MM:SS形式で返す。値が10未満の場合は0を先頭に付ける
    return [hours, minutes, seconds]
      .map(val => val < 10 ? `0${val}` : val)
      .join(':');
  };

  const getStudyRecord = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    const response = await fetch(`http://localhost/api/record/1/${e.target.value}`);
    const data = await response.json();
    // setRecord({ ...data.record, total_time: formatTime(data.record.total_time) });
    setTime(data.record.total_time);
    setRecord(data.record);
    console.log(data.record.id);
  }

  const updateRecord = async () => {
    setIsRunning(prevState => !prevState);
    setRecord((prevState) => ({
      ...prevState,
      total_time: time,
    }));

    try {
      // const response = await axios.put(`http://localhost/api/record/${record.id}`, {
      //   total_time: record.total_time
      // });

      const requestBody = {
        total_time: time
      };

      const response = http.put(`/api/record/${record.id}`, requestBody, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      // レスポンスの処理
      response.then((data) => {
        console.log(data);
      })
    } catch (error) {
      // エラーハンドリング
      console.error(error);
    }
  }

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // timeを1秒ずつ増やす
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div className="inline-block text-center gap-1">
      <select
        className="appearance-none bg-[#5865F2] text-white text-lg font-bold text-center p-2 rounded-lg w-52"
        value={selectValue}
        // onChange={(e) => setSelectValue(e.target.value)}
        onChange={(e) => getStudyRecord(e)}
      >
        <option disabled value=''>計測するタスクを選択</option>
        {tasks?.tasks.map((task) =>
          <option key={task.id} value={task.id}>{task.title}</option>
        )}
      </select>

      <div className="bg-[#5865F2] h-56 w-56 rounded-full flex items-center justify-center mt-6">
        <div className="bg-[#000] h-48 w-48 rounded-full flex items-center justify-center relative">
          <p className="text-white text-5xl font-bold" style={{ fontFamily: 'DigitalFont' }}>{formatTime(time) ?? '00:00:00'}</p>
          {isRunning ?
            <button className="absolute text-black font-bold bg-[#fff] rounded bottom-6 px-5 py-1" onClick={updateRecord}>
              Stop
            </button>
            :
            <button className="absolute text-black font-bold bg-[#fff] rounded bottom-6 px-5 py-1" onClick={() => setIsRunning((prevState) => !prevState)}>
              Start
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
