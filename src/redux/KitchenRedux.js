import { createSlice } from "@reduxjs/toolkit";

const bathroomSlice = createSlice({
  name: "bathroom",
  initialState: {
    bathroom: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getBathroomStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getBathroomSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.bathroom = action.payload;
    },
    getBathroomFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addBathroomStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addBathroomSuccess(state, action) {
      state.bathroom.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addBathroomFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    deleteBathroomStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteBathroomSuccess(state, action) {
      state.bathroom.splice(
        state.bathroom.findIndex((bathroom) => bathroom._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteBathroomFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
     //UPDATE
     updateBathroomStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updateBathroomSuccess(state, action) {
      state.isFetching = false;
      state.lists[
        state.lists.findIndex((name) => name._id === action.payload.id)
      ] = action.payload.updatedlist;
    },
    updateBathroomFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
    getBathroomFailure,
    getBathroomStart,
    getBathroomSuccess,
    deleteBathroomStart,
    deleteBathroomSuccess,
    deleteBathroomFailure,
    addBathroomStart,
    addBathroomSuccess,
    addBathroomFailure,
    updateBathroomStart,
    updateBathroomSuccess,
    updateBathroomFailure,
  } = bathroomSlice.actions;

export default bathroomSlice.reducer;
