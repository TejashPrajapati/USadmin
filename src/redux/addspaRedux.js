import { createSlice } from "@reduxjs/toolkit";

const spaSlice = createSlice({
  name: "spa",
  initialState: {
    spa: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getSpaStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getSpaSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.spa = action.payload;
    },
    getSpaFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addSpaStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addSpaSuccess(state, action) {
      state.spa.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addSpaFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    deleteSpaStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteSpaSuccess(state, action) {
      state.spa.splice(
        state.spa.findIndex((spa) => spa._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteSpaFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
     //UPDATE
     updateSpaStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updateSpaSuccess(state, action) {
      state.isFetching = false;
      state.lists[
        state.lists.findIndex((name) => name._id === action.payload.id)
      ] = action.payload.updatedlist;
    },
    updateSpaFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
    getSpaFailure,
    getSpaStart,
    getSpaSuccess,
    deleteSpaStart,
    deleteSpaSuccess,
    deleteSpaFailure,
    addSpaStart,
    addSpaSuccess,
    addSpaFailure,
    updateSpaStart,
    updateSpaSuccess,
    updateSpaFailure,
  } = spaSlice.actions;

export default spaSlice.reducer;
