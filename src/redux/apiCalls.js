import axios from "axios";
import {
  getSlidersFailure,
  getSlidersStart,
  getSlidersSuccess,
} from "./sliderRedux";
import {
  getAboutpageFailure,
  getAboutpageStart,
  getAboutpageSuccess,
} from "./aboutpageRedux";
import { 
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
} from "./addspaRedux";
import { loginFaliure, loginStart, loginSuccess } from "./userRedux";


 
//Login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFaliure());
  }
};

//Fetch Sliders
export const getSliders = async (dispatch) => {
  dispatch(getSlidersStart());
  try {
    const res = await axios.get("/sliders");
    dispatch(getSlidersSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(getSlidersFailure());
  }
};

//Fetch Aboutpage
export const getAboutpage = async (dispatch) => {
  dispatch(getAboutpageStart());
  try {
    const res = await axios.get("/aboutpage");
    dispatch(getAboutpageSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getAboutpageFailure());
  }
};

//Add product
export const addSpa = async (product, dispatch) => {
  dispatch(addSpaStart());
  try {
    const res = await axios.post("/spa", product, {});
    dispatch(addSpaSuccess(res.data));
  } catch (error) {
    dispatch(addSpaFailure());
  }
};
