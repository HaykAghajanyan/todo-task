import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Task, TodoState } from '../types';
// import { STATUSES } from '../constants';


const initialState: TodoState = {
  tasks: [],
};


const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push({ ...action.payload, status: 'Pending', id: Date.now().toString() });
      // ???
      // state.tasks.push({ ...action.payload, status: STATUSES.PENDING, id: Date.now().toString() });
    },
    editTask: (state, action: PayloadAction<Task>) => {
      state.tasks.map(task => {
        if (task.id === action.payload.id) {
          let { status, deadline } = action.payload;

          if (status !== 'Completed' && status !== 'Removed') {
            const now = new Date().toISOString().split('T')[0];
            if (deadline && deadline < now) {
              status = 'Overdue';
            }
          }

          return {
            ...action.payload,
            status,
          };
        }

        return task;
      });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].status = 'Removed';
      }
    },
    markAsComplete: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1 && state.tasks[index].status === 'Removed') {
        state.tasks.splice(index, 1);
      } else if (index !== -1) {
        state.tasks[index].status = 'Completed';
      }
    },
    restoreTask: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);

      if (index !== -1) {
        state.tasks[index].status = 'Pending';
      }
    },
  },
});

export const { addTask, editTask, removeTask, markAsComplete, restoreTask } = todoSlice.actions;

export default todoSlice.reducer;
