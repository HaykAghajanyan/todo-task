import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TrashList from './TrashList';
import { Task } from '../types';
import { STATUSES } from '../constants';
import { RootState } from '../reducers';
import { addTask, editTask, removeTask, markAsComplete } from '../reducers/todoSlice';


const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.todo.tasks);
  const removedTasks = tasks.filter((task) => task.status === STATUSES.REMOVED);

  const handleAddTask = (task: Task) => {
    dispatch(addTask(task));
  };

  const handleEditTask = (task: Task) => {
    dispatch(editTask(task));
  };

  const handleRemoveTask = (taskId: string) => {
    dispatch(removeTask(taskId));
  };

  const handleMarkAsComplete = (taskId: string) => {
    dispatch(markAsComplete(taskId));
  };

  useEffect(() => {
    tasks.forEach((task) => {
      dispatch(editTask(task));
    });
  }, [tasks, dispatch]);

  return (
    <div>
      <TaskForm onSubmit={handleAddTask} />
      {!!tasks.length && (
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onRemove={handleRemoveTask}
          onComplete={handleMarkAsComplete}
        />
      )}
      {!!removedTasks.length && <TrashList tasks={removedTasks} />}
    </div>
  );
};

export default TodoList;
