import { createSlice } from "@reduxjs/toolkit";

const carpenterSlice = createSlice({
  name: "carpenter",
  initialState: {
    carpenter: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getCarpenterStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getCarpenterSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.carpenter = action.payload;
    },
    getCarpenterFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addCarpenterStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addCarpenterSuccess(state, action) {
      state.carpenter.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addCarpenterFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    deleteCarpenterStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteCarpenterSuccess(state, action) {
      state.carpenter.splice(
        state.carpenter.findIndex((carpenter) => carpenter._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteCarpenterFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
     //UPDATE
     updateCarpenterStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updateCarpenterSuccess(state, action) {
      state.isFetching = false;
      state.lists[
        state.lists.findIndex((name) => name._id === action.payload.id)
      ] = action.payload.updatedlist;
    },
    updateCarpenterFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
    getCarpenterFailure,
    getCarpenterStart,
    getCarpenterSuccess,
    deleteCarpenterStart,
    deleteCarpenterSuccess,
    deleteCarpenterFailure,
    addCarpenterStart,
    addCarpenterSuccess,
    addCarpenterFailure,
    updateCarpenterStart,
    updateCarpenterSuccess,
    updateCarpenterFailure,
  } = carpenterSlice.actions;

export default carpenterSlice.reducer;
