import { createSlice } from "@reduxjs/toolkit";

const homecleaningSlice = createSlice({
  name: "homecleaning",
  initialState: {
    homecleaning: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getHomecleaningStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getHomecleaningSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.homecleaning = action.payload;
    },
    getHomecleaningFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addHomecleaningStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addHomecleaningSuccess(state, action) {
      state.homecleaning.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addHomecleaningFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    deleteHomecleaningStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteHomecleaningSuccess(state, action) {
      state.homecleaning.splice(
        state.homecleaning.findIndex((item) => item._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteHomecleaningFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
  },
});

export const {
    getHomecleaningFailure,
    getHomecleaningStart,
    getHomecleaningSuccess,
    deleteHomecleaningStart,
    deleteHomecleaningSuccess,
    deleteHomecleaningFailure,
    addHomecleaningStart,
    addHomecleaningSuccess,
    addHomecleaningFailure,
    updateHomecleaningStart,
    updateHomecleaningSuccess,
    updateHomecleaningFailure,
  } = homecleaningSlice.actions;

export default homecleaningSlice.reducer;
