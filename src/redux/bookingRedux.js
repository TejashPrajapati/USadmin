import { createSlice } from "@reduxjs/toolkit";

const spaSlice = createSlice({
  name: "booking",
  initialState: {
    spa: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getBookingStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getBookingSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.booking = action.payload;
    },
    getBookingFailure(state) {
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
    deleteBookingStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteBookingSuccess(state, action) {
      state.booking.splice(
        state.booking.findIndex((spa) => spa._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteBookingFailure(state) {
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
    getBookingFailure,
    getBookingStart,
    getBookingSuccess,
    deleteBookingStart,
    deleteBookingSuccess,
    deleteBookingFailure,
    addSpaStart,
    addSpaSuccess,
    addSpaFailure,
    updateSpaStart,
    updateSpaSuccess,
    updateSpaFailure,
  } = spaSlice.actions;

export default spaSlice.reducer;
