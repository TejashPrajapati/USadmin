import { createSlice } from "@reduxjs/toolkit";

const applianceSlice = createSlice({
  name: "appliance",
  initialState: {
    appliance: [],
    isFetching: false,
    error: false,
  },  
  reducers: {
    //GET ALL
    getApplianceStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    getApplianceSuccess(state, action) {
      state.error = false;
      state.isFetching = false;
      state.appliance = action.payload;
    },
    getApplianceFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

  //  ADD
    addApplianceStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    addApplianceSuccess(state, action) {
      state.appliance.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addApplianceFailure(state) {
      state.error = true;
      state.isFetching = false;
    },

    // //DELETE
    deleteApplianceStart(state) {
      state.error = false;
      state.isFetching = true;
    },
    deleteApplianceSuccess(state, action) {
      state.appliance.splice(
        state.appliance.findIndex((appliance) => appliance._id === action.payload),
        1
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteApplianceFailure(state) {
      state.error = true;
      state.isFetching = false;
    },
     //UPDATE
     updateApplianceStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updateApplianceSuccess(state, action) {
      state.isFetching = false;
      state.lists[
        state.lists.findIndex((name) => name._id === action.payload.id)
      ] = action.payload.updatedlist;
    },
    updateApplianceFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
    getApplianceFailure,
    getApplianceStart,
    getApplianceSuccess,
    deleteApplianceStart,
    deleteApplianceSuccess,
    deleteApplianceFailure,
    addApplianceStart,
    addApplianceSuccess,
    addApplianceFailure,
    updateApplianceStart,
    updateApplianceSuccess,
    updateApplianceFailure,
  } = applianceSlice.actions;

export default applianceSlice.reducer;
