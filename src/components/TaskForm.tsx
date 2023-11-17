import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Task } from '../types';
import { Button, TextField, InputLabel, Paper } from '@material-ui/core';

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const {
    resetForm,
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      deadline: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string(),
      deadline: Yup.date(),
    }),
    onSubmit: (values) => {
      onSubmit(values as Task);
      resetForm();
    },
  });

  return (
    <Paper className='task-form-container'>
      <form className='task-form' onSubmit={handleSubmit}>
        <div className='task-form-item'>
          <InputLabel htmlFor='title'>Title:</InputLabel>
          <TextField
            id='title'
            name='title'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {touched.title && errors.title && <div>{errors.title}</div>}
        </div>
        <div className='task-form-item'>
          <InputLabel htmlFor='description'>Description:</InputLabel>
          <TextField
            id='description'
            name='description'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
        </div>
        <div className='task-form-item'>
          <InputLabel htmlFor='deadline'>Deadline:</InputLabel>
          <input
            id="deadline"
            name="deadline"
            type="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.deadline}
          />
        </div>
        <div>
          <Button variant='outlined' type='submit'>Add Task</Button>
        </div>
      </form>
    </Paper>
  );
};

export default TaskForm;
