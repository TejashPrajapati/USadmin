import { createSlice } from "@reduxjs/toolkit";

const disinfectionSlice = createSlice({
  name: "disinfection",
  initialState: {
    disinfection: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getDisinfectionStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getDisinfectionSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.disinfection = action.payload;
    },
    getDisinfectionFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addDisinfectionStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addDisinfectionSuccess(state, action) {
      state.disinfection.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addDisinfectionFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    deleteDisinfectionStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteDisinfectionSuccess(state, action) {
      state.disinfection.splice(
        state.disinfection.findIndex((disinfection) => disinfection._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteDisinfectionFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
     //UPDATE
     updateDisinfectionStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updateDisinfectionSuccess(state, action) {
      state.isFetching = false;
      state.lists[
        state.lists.findIndex((name) => name._id === action.payload.id)
      ] = action.payload.updatedlist;
    },
    updateDisinfectionFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
    getDisinfectionFailure,
    getDisinfectionStart,
    getDisinfectionSuccess,
    deleteDisinfectionStart,
    deleteDisinfectionSuccess,
    deleteDisinfectionFailure,
    addDisinfectionStart,
    addDisinfectionSuccess,
    addDisinfectionFailure,
    updateDisinfectionStart,
    updateDisinfectionSuccess,
    updateDisinfectionFailure,
  } = disinfectionSlice.actions;

export default disinfectionSlice.reducer;
