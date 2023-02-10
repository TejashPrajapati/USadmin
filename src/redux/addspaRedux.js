import { createSlice } from "@reduxjs/toolkit";

const spaSlice = createSlice({
  name: "add-spa",
  initialState: {
    addspa: [],
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
      state.addspa = action.payload;
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
      state.addspa.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addSpaFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    // deleteSliderStart(state) {
    //   state.error = false;
    //   state.isFetching = true;
    // },
    // deleteSliderSuccess(state, action) {
    //   state.sliders.splice(
    //     state.sliders.findIndex((item) => item._id === action.payload),
    //     1
    //   );
    //   state.isFetching = false;
    //   state.error = false;
    // },
    // deleteSliderFailure(state) {
    //   state.error = true;
    //   state.isFetching = false;
    // },
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
