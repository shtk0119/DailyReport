'use client';

import React, { useState } from 'react';
import GanttChart from '../_components/GanttChart';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    {
      id: 'Task 1',
      name: 'Conceptualise',
      start: '2024-01-01',
      end: '2024-01-03',
      progress: 100,
      dependencies: '',
    },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <GanttChart
        tasks={tasks}
        onAddTask={addTask}
        onRemoveTask={handleRemoveTask}
      />
    </div>
  );
};

export default TaskManagement;
