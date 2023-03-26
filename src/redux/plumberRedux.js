import { createSlice } from "@reduxjs/toolkit";

const plumberSlice = createSlice({
  name: "plumber",
  initialState: {
    plumber: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getPlumberStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getPlumberSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.plumber = action.payload;
    },
    getPlumberFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addPlumberStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addPlumberSuccess(state, action) {
      state.plumber.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addPlumberFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    deletePlumberStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deletePlumberSuccess(state, action) {
      state.plumber.splice(
        state.plumber.findIndex((plumber) => plumber._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deletePlumberFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
     //UPDATE
     updatePlumberStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updatePlumberSuccess(state, action) {
      state.isFetching = false;
      state.lists[
        state.lists.findIndex((name) => name._id === action.payload.id)
      ] = action.payload.updatedlist;
    },
    updatePlumberFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
    getPlumberFailure,
    getPlumberStart,
    getPlumberSuccess,
    deletePlumberStart,
    deletePlumberSuccess,
    deletePlumberFailure,
    addPlumberStart,
    addPlumberSuccess,
    addPlumberFailure,
    updatePlumberStart,
    updatePlumberSuccess,
    updatePlumberFailure,
  } = plumberSlice.actions;

export default plumberSlice.reducer;
