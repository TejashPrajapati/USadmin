import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    auth: [],
    isFetching: false,
    error: false,
  },
  reducers: {
//GET ALL
getloginStart(state) {
  state.error = false;
  state.isFetching = true;
},
getloginSuccess(state, action) {
  state.error = false;
  state.isFetching = false;
  state.auth = action.payload;
},
getloginFailure(state) {
  state.error = true;
  state.isFetching = false;
},


    loginStart(state) {
      state.isFetching = true;
    },
    loginSuccess(state, action) {
      state.auth = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFaliure(state) {
      state.isFetching = false;
      state.error = true;
    },
    logout(state) {
      state.auth = null;
      state.error = false;
      state.isFetching = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFaliure,getloginStart,getloginSuccess,getloginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
