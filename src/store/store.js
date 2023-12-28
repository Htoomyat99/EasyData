import {configureStore} from '@reduxjs/toolkit';
import dataReducer from './counter/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
