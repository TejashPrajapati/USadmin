import { createSlice } from "@reduxjs/toolkit";

const mansalonSlice = createSlice({
  name: "mansalone",
  initialState: {
    mansalon: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getMansalonStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getMansalonSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.mansalon = action.payload;
    },
    getMansalonFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addMansalonStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addMansalonSuccess(state, action) {
      state.mansalon.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addMansalonFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
    //UPDATE
    updateMansalonStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updateMansalonSuccess(state, action) {
      state.isFetching = false;
      state.lists[
        state.lists.findIndex((name) => name._id === action.payload.id)
      ] = action.payload.updatedlist;
    },
    updateMansalonFailure(state) {
      state.isFetching = false;
      state.error = true;
    },

    // //DELETE
    deleteMansalonStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteMansalonSuccess(state, action) {
      state.mansalon.splice(
        state.mansalon.findIndex((item) => item._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteMansalonFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
  },
});

export const {
    getMansalonFailure,
    getMansalonStart,
    getMansalonSuccess,
    deleteMansalonStart,
    deleteMansalonSuccess,
    deleteMansalonFailure,
    addMansalonStart,
    addMansalonSuccess,
    addMansalonFailure,
    updateMansalonStart,
    updateMansalonSuccess,
    updateMansalonFailure,
  } = mansalonSlice.actions;

export default mansalonSlice.reducer;
