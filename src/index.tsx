import React from 'react';
import 'dayjs/locale/en-gb';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { configureStore } from '@reduxjs/toolkit';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import App from './App';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

import './index.css';


const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
      <App />
    </LocalizationProvider>
  </Provider>
);


reportWebVitals();
