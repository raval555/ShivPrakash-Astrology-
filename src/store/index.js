import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import appointmentReducer from './slices/appointmentSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    appointment: appointmentReducer,
    user: userReducer,
  },
});

export default store;
