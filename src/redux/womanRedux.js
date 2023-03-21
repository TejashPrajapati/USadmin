import { createSlice } from "@reduxjs/toolkit";

const womansalonSlice = createSlice({
  name: "womansalon",
  initialState: {
    womansalon: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getWomansalonStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getWomansalonSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.womansalon = action.payload;
    },
    getWomansalonFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addWomansalonStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addWomansalonSuccess(state, action) {
      state.womansalon.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addWomansalonFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    deleteWomansalonStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteWomansalonSuccess(state, action) {
      state.womansalon.splice(
        state.womansalon.findIndex((item) => item._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteWomansalonFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
    //UPDATE
    updateWomansalonStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updateWomansalonSuccess(state, action) {
      state.isFetching = false;
      state.lists[
        state.lists.findIndex((name) => name._id === action.payload.id)
      ] = action.payload.updatedlist;
    },
    updateWomansalonFailure(state) {
      state.isFetching = false;
      state.error = true;
    },

  },
});

export const {
    getWomansalonFailure,
    getWomansalonStart,
    getWomansalonSuccess,
    deleteWomansalonStart,
    deleteWomansalonSuccess,
    deleteWomansalonFailure,
    addWomansalonStart,
    addWomansalonSuccess,
    addWomansalonFailure,
    updateWomansalonStart,
    updateWomansalonSuccess,
    updateWomansalonFailure,
  } = womansalonSlice.actions;

export default womansalonSlice.reducer;
