import React from 'react';
import { useDispatch } from 'react-redux';

import { STATUSES } from '../constants';
import { TrashListProps } from '../types';
import { restoreTask, removeTask } from '../reducers/todoSlice';
import TaskCard from './TaskCard';


const TrashList = ({ tasks }: TrashListProps) => {
  const dispatch = useDispatch();

  const handleRestoreTask = (taskId: string) => {
    dispatch(restoreTask(taskId));
  };

  const handleRemovePermanently = (taskId: string) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      <h2>Trash</h2>
      <ul>
        {tasks.map((task) => <TaskCard
          task={task}
          key={task.id}
          isInTrash={true}
          handleRestoreTask={handleRestoreTask}
          handleRemovePermanently={handleRemovePermanently}
        />)}
      </ul>
    </div>
  );
};

export default TrashList;
