import {createSlice} from '@reduxjs/toolkit';
//import axios from 'axios';

export const homeslice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    isLocationSeleted: false,
  },
  reducers: {
    setloading: (state, action) => {
      state.loading = action.payload;
    },
    setLocationSelected: (state, action) => {
      state.isLocationSeleted = action.payload;
    },
  },
});

//actions
export const {
  setloading,

  setLocationSelected,
} = homeslice.actions;

export default homeslice.reducer;
