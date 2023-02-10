import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    sliders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSlidersStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getSlidersSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.sliders = action.payload;
    },
    getSlidersFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    //ADD
    // addSliderStart(state) {
    //   state.error = false;
    //   state.isFetching = true;
    // },
    // addSliderSuccess(state, action) {
    //   state.sliders.push(action.payload);
    //   state.isFetching = false;
    //   state.error = false;
    // },
    // addSliderFailure(state) {
    //   state.error = true;
    //   state.isFetching = false;
    // },

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
  getSlidersFailure,
  getSlidersStart,
  getSlidersSuccess,
  deleteSliderStart,
  deleteSliderSuccess,
  deleteSliderFailure,
  addSliderStart,
  addSliderSuccess,
  addSliderFailure,
} = sliderSlice.actions;

export default sliderSlice.reducer;
