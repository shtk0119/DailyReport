'use client';

import React, { useEffect, useRef, useState } from 'react';
import Gantt from 'frappe-gantt';
import { CalendarIcon } from './CalendarIcon';
import EscapeButton from './EscapeButton';
import InputAndSelect from './InputAndSelect';
import { PenIcon } from './PenIcon';
import { TrashCan } from './TrashCanIcon';

interface Task {
  id: string;
  name: string;
  start: string;
  end: string;
  progress: number;
  dependencies: string;
  selectedOption?: any;
  editState?: {
    startYear: string;
    startMonth: string;
    startDay: string;
    endYear: string;
    endMonth: string;
    endDay: string;
    hour: string;
    minute: string;
    progress: number;
  };
}

interface GanttChartProps {
  tasks: Task[];
  onAddTask: (newTask: Task) => void;
  onRemoveTask: (taskId: string) => void;
}

const GanttChart: React.FC<GanttChartProps> = ({
  tasks,
  onAddTask,
  onRemoveTask,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startYear, setStartYear] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endYear, setEndYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endDay, setEndDay] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [progress, setProgress] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState<Task[]>([]);

  const ganttRef = useRef<SVGSVGElement>(null);
  const [gantt, setGantt] = useState<Gantt | null>(null);

  useEffect(() => {
    if (ganttRef.current && !gantt) {
      const newGantt = new Gantt(ganttRef.current, tasks, {
        on_click: function (task) {
          console.log(task);
        },
        on_date_change: function (task, start, end) {
          console.log(task, start, end);
        },
        on_progress_change: function (task, progress) {
          console.log(task, progress);
        },
        on_view_change: function (mode) {
          console.log(mode);
        },
        custom_popup_html: function (task) {
          return `
            <div class="details-container">
              <h5>${task.name}</h5>
              <p>${task.progress}% completed</p>
            </div>
          `;
        },
      });
      setGantt(newGantt);
    }
  }, [gantt]);

  useEffect(() => {
    if (gantt) {
      gantt.refresh(tasks);
    }
  }, [tasks, gantt]);

  const handleTopFormSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: `task-${formSubmitted.length + 1}`,
      name: selectedOption ? selectedOption.label : '',
      selectedOption: selectedOption,
      start: `${startYear}-${startMonth}-${startDay}`,
      end: `${endYear}-${endMonth}-${endDay}`,
      progress: parseInt(progress),
      dependencies: '',
      editState: {
        startYear: startYear,
        startMonth: startMonth,
        startDay: startDay,
        endYear: endYear,
        endMonth: endMonth,
        endDay: endDay,
        hour: hour,
        minute: minute,
        progress: progress,
      },
    };

    onAddTask(newTask);
    setFormSubmitted([...formSubmitted, newTask]);
    setSelectedOption(null);
  };

  const handleRemoveTask = (event, taskId: string) => {
    event.preventDefault();
    event.stopPropagation();

    const updatedFormSubmitted = formSubmitted.filter(
      (task) => task.id !== taskId,
    );
    setFormSubmitted(updatedFormSubmitted);
    onRemoveTask(taskId);
  };

  const handleSelectChange = (selectedOption, taskIndex) => {
    const updatedFormSubmitted = formSubmitted.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, selectedOption };
      }
      return task;
    });
    setFormSubmitted(updatedFormSubmitted);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-8">
        <EscapeButton />
      </div>
      <div className="flex justify-between mr-28 my-10">
        <div className="h-1/4">
          <form
            className="bg-white border-solid border-2 py-1 px-5 mx-20"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="text-center  rounded-md py-1 my-3 mx-2">
                <InputAndSelect
                  selectedOption={selectedOption}
                  onChange={handleTopFormSelectChange}
                />
              </div>
              <div className="flex items-center my-6">
                <div className="flex items-center border-solid border-2 rounded-md py-1 mx-2">
                  <input
                    className="outline-none text-end w-14"
                    type="text"
                    placeholder="年"
                    value={startYear}
                    onChange={(event) => setStartYear(event.target.value)}
                  ></input>
                  <span>/</span>
                  <input
                    className="outline-none text-end w-10"
                    type="text"
                    placeholder="月"
                    value={startMonth}
                    onChange={(event) => setStartMonth(event.target.value)}
                  />
                  <span>/</span>
                  <input
                    className="outline-none text-end w-10 mr-8"
                    type="text"
                    placeholder="日"
                    value={startDay}
                    onChange={(event) => setStartDay(event.target.value)}
                  />
                  <span>
                    <CalendarIcon />
                  </span>
                </div>
                <div>～</div>
                <div className="flex items-center border-solid border-2 rounded-md py-1 mx-2">
                  <input
                    className="outline-none text-end w-14"
                    type="text"
                    placeholder="年"
                    value={endYear}
                    onChange={(event) => setEndYear(event.target.value)}
                  ></input>
                  <span>/</span>
                  <input
                    className="outline-none text-end w-10"
                    type="text"
                    placeholder="月"
                    value={endMonth}
                    onChange={(event) => setEndMonth(event.target.value)}
                  />
                  <span>/</span>
                  <input
                    className="outline-none text-end w-10 mr-8"
                    type="text"
                    placeholder="日"
                    value={endDay}
                    onChange={(event) => setEndDay(event.target.value)}
                  />
                  <span>
                    <CalendarIcon />
                  </span>
                </div>
              </div>
              <div className="flex items-center pb-3">
                <div className="flex items-center my-2">
                  <input
                    type="text"
                    value={hour}
                    onChange={(event) => setHour(event.target.value)}
                    className="w-20 text-center border-solid border-2 rounded-md py-1 mx-2"
                  ></input>
                  <h1>時間</h1>
                  <input
                    type="text"
                    value={minute}
                    onChange={(event) => setMinute(event.target.value)}
                    className="w-20 text-center border-solid border-2 rounded-md py-1 mx-2"
                  ></input>
                  <h1>分</h1>
                </div>
                <input
                  className="w-20 text-center border-solid border-2 rounded-md py-1 ml-12"
                  type="text"
                  value={progress}
                  onChange={(event) => setProgress(event.target.value)}
                ></input>
                %
                <input
                  type="submit"
                  value="+"
                  className="bg-main text-white text-lg rounded-lg py-1 px-4 ml-8"
                ></input>
              </div>
            </div>
          </form>

          <div
            className="overflow-y-auto border-solid border-2 py-1 mt-7 mx-20"
            style={{ height: 'calc(100vh - 30rem)' }}
          >
            {formSubmitted.map((task, index) => (
              <div key={index} className="border-solid border-2 py-1 my-2 mx-3">
                <form className=" px-5 my-1">
                  <div>
                    <div className="text-center  rounded-md mx-2">
                      <InputAndSelect
                        selectedOption={task.selectedOption}
                        onChange={(option) => handleSelectChange(option, index)}
                      />
                    </div>
                    <div className="flex items-center my-3">
                      <div className="flex items-center border-solid border-2 rounded-md mx-2">
                        <input
                          className="outline-none text-end w-14"
                          type="text"
                          placeholder="年"
                          value={task.editState.startYear}
                          onChange={(event) => setStartYear(event.target.value)}
                        ></input>
                        <span>/</span>
                        <input
                          className="outline-none text-end w-10"
                          type="text"
                          placeholder="月"
                          value={task.editState.startMonth}
                          onChange={(event) =>
                            setStartMonth(event.target.value)
                          }
                        />
                        <span>/</span>
                        <input
                          className="outline-none text-end w-10 mr-8"
                          type="text"
                          placeholder="日"
                          value={task.editState.startDay}
                          onChange={(event) => setStartDay(event.target.value)}
                        />
                      </div>
                      <div>～</div>
                      <div className="flex items-center border-solid border-2 rounded-md mx-2">
                        <input
                          className="outline-none text-end w-14"
                          type="text"
                          placeholder="年"
                          value={task.editState.endYear}
                          onChange={(event) => setEndYear(event.target.value)}
                        ></input>
                        <span>/</span>
                        <input
                          className="outline-none text-end w-10"
                          type="text"
                          placeholder="月"
                          value={task.editState.endMonth}
                          onChange={(event) => setEndMonth(event.target.value)}
                        />
                        <span>/</span>
                        <input
                          className="outline-none text-end w-10 mr-8"
                          type="text"
                          placeholder="日"
                          value={task.editState.endDay}
                          onChange={(event) => setEndDay(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={task.editState.hour}
                          onChange={(event) => setHour(event.target.value)}
                          className="w-14 text-center border-solid border-2 rounded-md mx-2"
                        ></input>
                        <h1>時間</h1>
                        <input
                          type="text"
                          value={task.editState.minute}
                          onChange={(event) => setMinute(event.target.value)}
                          className="w-14 text-center border-solid border-2 rounded-md mx-2"
                        ></input>
                        <h1>分</h1>
                      </div>
                      <input
                        className="w-14 text-center border-solid border-2 rounded-md ml-8 mr-2"
                        type="text"
                        value={task.editState.progress}
                        onChange={(event) => setProgress(event.target.value)}
                      ></input>
                      <span>%</span>
                      <div className="flex ml-16">
                        <button type="submit" className="mr-4">
                          <PenIcon />
                        </button>
                        <button
                          type="submit"
                          onClick={(event) => handleRemoveTask(event, task.id)}
                        >
                          <TrashCan />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ))}
          </div>
        </div>

        <svg ref={ganttRef} className="" />
      </div>
    </div>
  );
};

export default GanttChart;
