import {createSlice} from '@reduxjs/toolkit';

export const loginslice = createSlice({
  name: 'login',
  initialState: {
    isLogged: false,
    latlong: [],
    Location: [],
    user: [],
    allDoctors: [],
    doctors: [],
    specialists: [],
    appointment: {
      userName: null,
      date_Value: null,
      slotTiming: null,
      user_Id: null,
      doctor_id: null,
      doctorName: null,
    },
    docData: {},
    comments: [],
  },
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },

    setlatlong: (state, action) => {
      state.latlong = action.payload;
    },
    setLocation: (state, action) => {
      state.Location = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAllDoctors: (state, action) => {
      state.allDoctors = action.payload;
    },
    setDoctors: (state, action) => {
      state.doctors = action.payload;
    },
    setSpecialists: (state, action) => {
      state.specialists = action.payload;
    },
    setAppointment: (state, action) => {
      state.appointment = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    setDocData: (state, action) => {
      state.docData = action.payload;
    },
  },
});

//actions
export const {
  setIsLogged,
  setUser,
  setLocation,
  setlatlong,
  setAllDoctors,
  setDoctors,
  setAppointment,
  setSpecialists,
  setComments,
  setDocData,
} = loginslice.actions;

export default loginslice.reducer;
