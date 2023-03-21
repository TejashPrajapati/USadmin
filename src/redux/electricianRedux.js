import { createSlice } from "@reduxjs/toolkit";

const electricianSlice = createSlice({
  name: "electrician",
  initialState: {
    electrician: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getElectricianStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getElectricianSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.electrician = action.payload;
    },
    getElectricianFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addElectricianStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addElectricianSuccess(state, action) {
      state.electrician.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addElectricianFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    deleteElectricianStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteElectricianSuccess(state, action) {
      state.electrician.splice(
        state.electrician.findIndex((item) => item._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteElectricianFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
    //UPDATE
    updateElectricianStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updateElectricianSuccess(state, action) {
      state.isFetching = false;
      state.lists[
        state.lists.findIndex((name) => name._id === action.payload.id)
      ] = action.payload.updatedlist;
    },
    updateElectricianFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
    getElectricianFailure,
    getElectricianStart,
    getElectricianSuccess,
    deleteElectricianStart,
    deleteElectricianSuccess,
    deleteElectricianFailure,
    addElectricianStart,
    addElectricianSuccess,
    addElectricianFailure,
    updateElectricianStart,
    updateElectricianSuccess,
    updateElectricianFailure,
  } = electricianSlice.actions;

export default electricianSlice.reducer;
