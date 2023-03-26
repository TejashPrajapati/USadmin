import { createSlice } from "@reduxjs/toolkit";

const fullhomecleaningSlice = createSlice({
  name: "fullhomecleaning",
  initialState: {
    fullhomecleaning: [],
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
      state.fullhomecleaning = action.payload;
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
      state.fullhomecleaning.push(action.payload);
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
      state.fullhomecleaning.splice(
        state.fullhomecleaning.findIndex((fullhomecleaning) => fullhomecleaning._id === action.payload),
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
  } = fullhomecleaningSlice.actions;

export default fullhomecleaningSlice.reducer;
