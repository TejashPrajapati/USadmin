import { createSlice } from "@reduxjs/toolkit";

const aboutpageSlice = createSlice({
  name: "aboutpages",
  initialState: {
    aboutpage: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getAboutpageStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getAboutpageSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.aboutpage = action.payload;
    },
    getAboutpageFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    
    addAboutpageStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addAboutpageSuccess(state, action) {
      state.aboutpage.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addAboutpageFailure(state) {
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
  getAboutpageFailure,
  getAboutpageStart,
  getAboutpageSuccess,
  deleteAboutpageStart,
  deleteAboutpageSuccess,
  deleteAboutpageFailure,
  addAboutpageStart,
  addAboutpageSuccess,
  addAboutpageFailure,
} = aboutpageSlice.actions;

export default aboutpageSlice.reducer;
