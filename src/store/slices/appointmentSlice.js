import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  selectedSlot: null,
  loading: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setSelectedSlot: (state, action) => {
      state.selectedSlot = action.payload;
    },
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedSlot: (state) => {
      state.selectedSlot = null;
    },
  },
});

export const {
  setSelectedSlot,
  addAppointment,
  setLoading,
  setError,
  clearError,
  clearSelectedSlot,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
