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
import {
  getElectricianFailure,
  getElectricianStart,
  getElectricianSuccess,
  addElectricianFailure,
  addElectricianStart,
  addElectricianSuccess,
  updateElectricianStart,
    updateElectricianSuccess,
    updateElectricianFailure,
    deleteElectricianStart,
    deleteElectricianSuccess,
    deleteElectricianFailure,
} from "./electricianRedux";
import {
  addAboutpageFailure,
  addAboutpageStart,
  addAboutpageSuccess,
} from "./aboutpageRedux";
import {
  getMansalonFailure,
  getMansalonStart,
  getMansalonSuccess,
  addMansalonFailure,
  addMansalonStart,
  addMansalonSuccess,
  updateMansalonStart,
  updateMansalonSuccess,
  updateMansalonFailure,
  deleteMansalonStart,
    deleteMansalonSuccess,
    deleteMansalonFailure,
} from "./mansalonRedux";
import {
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
} from "./womanRedux";
import {
  getHomecleaningFailure,
  getHomecleaningStart,
  getHomecleaningSuccess,
  deleteHomecleaningStart,
  deleteHomecleaningSuccess,
  deleteHomecleaningFailure,
  addHomecleaningStart,
  addHomecleaningSuccess,
  addHomecleaningFailure,
  updateHomecleaningStart,
  updateHomecleaningSuccess,
  updateHomecleaningFailure,
} from "./homeclenerRedux";

//Login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/user", user);
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
//Fetch Mansalon
export const getMansalon = async (dispatch) => {
  dispatch(getMansalonStart());
  try {
    const res = await axios.get("/mansalon");
    dispatch(getMansalonSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getMansalonFailure());
  }
};
// Add Mansalon
export const addMansalon = async (product, dispatch) => {
  dispatch(addMansalonStart());
  try {
    const res = await axios.post("/mansalon", product, {});
    dispatch(addMansalonSuccess(res.data));
  } catch (error) {
    dispatch(addMansalonFailure());
  }
};
//Fetch WoMansalon
export const getWomansalon = async (dispatch) => {
  dispatch(getWomansalonStart());
  try {
    const res = await axios.get("/womansalon");
    dispatch(getWomansalonSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getWomansalonFailure());
  }
};
// Update  Womansalon
export const updateWomansalon = async (id, updatedList, dispatch) => {
  dispatch(updateWomansalonStart());
  try {
    const res = await axios.put("/womansalon/" + id, updatedList, {});
    dispatch(updateWomansalonSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updateWomansalonFailure());
  }
};
//Delete Womanansalon
export const deleteWomansalon = async (id, dispatch) => {
  dispatch(deleteWomansalonStart());
  try {
    await axios.delete("/womansalon/" + id, {});
    dispatch(deleteWomansalonSuccess(id));
  } catch (error) {
    dispatch(deleteWomansalonFailure());
  }
};
// Add Mansalon
export const addWomansalon = async (product, dispatch) => {
  dispatch(addWomansalonStart());
  try {
    const res = await axios.post("/womansalon", product, {});
    dispatch(addWomansalonSuccess(res.data));
  } catch (error) {
    dispatch(addWomansalonFailure());
  }
};

// Update  Mansalon
export const updateMansalon = async (id, updatedList, dispatch) => {
  dispatch(updateMansalonStart());
  try {
    const res = await axios.put("/mansalon/" + id, updatedList, {});
    dispatch(updateMansalonSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updateMansalonFailure());
  }
};
//Delete Mansalon
export const deleteMansalon = async (id, dispatch) => {
  dispatch(deleteMansalonStart());
  try {
    await axios.delete("/mansalon/" + id, {});
    dispatch(deleteMansalonSuccess(id));
  } catch (error) {
    dispatch(deleteMansalonFailure());
  }
};

//Fetch Homecleaning
export const getHomecleaning = async (dispatch) => {
  dispatch(getHomecleaningStart());
  try {
    const res = await axios.get("/homecleaning");
    dispatch(getHomecleaningSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getHomecleaningFailure());
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

// Fetch Spa
export const getSpa = async (dispatch) => {
  dispatch(getSpaStart());
  try {
    const res = await axios.get("/spa");
    dispatch(getSpaSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(getSpaFailure());
  }
};
//Delete Spa
export const deleteSpa = async (id, dispatch) => {
  dispatch(deleteSpaStart());
  try {
    await axios.delete("/spa/" + id, {});
    dispatch(deleteSpaSuccess(id));
  } catch (error) {
    dispatch(deleteSpaFailure());
  }
};
// Add Electrician
export const addElectrician = async (product, dispatch) => {
  dispatch(addElectricianStart());
  try {
    const res = await axios.post("/electrician", product, {});
    dispatch(addElectricianSuccess(res.data));
  } catch (error) {
    dispatch(addElectricianFailure());
  }
};
// Update  Electrician
export const updateElectrician = async (id, updatedList, dispatch) => {
  dispatch(updateElectricianStart());
  try {
    const res = await axios.put("/electrician/" + id, updatedList, {});
    dispatch(updateElectricianSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updateElectricianFailure());
  }
};
//Delete Electrician
export const deleteElectrician = async (id, dispatch) => {
  dispatch(deleteElectricianStart());
  try {
    await axios.delete("/electrician/" + id, {});
    dispatch(deleteElectricianSuccess(id));
  } catch (error) {
    dispatch(deleteElectricianFailure());
  }
};

// Fetch Electrician
export const getElectrician = async (dispatch) => {
  dispatch(getElectricianStart());
  try {
    const res = await axios.get("/electrician");
    dispatch(getElectricianSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getElectricianFailure());
  }
};
//Add AboutPage
export const addAboutpage = async (product, dispatch) => {
  dispatch(addAboutpageStart());
  try {
    const res = await axios.post("/aboutpage", product, {});
    dispatch(addAboutpageSuccess(res.data));
  } catch (error) {
    dispatch(addAboutpageFailure());
  }
};
//Update About Spa
export const updateSpa = async (id, updatedList, dispatch) => {
  dispatch(updateSpaStart());
  try {
    const res = await axios.put("/spa/" + id, updatedList, {});
    dispatch(updateSpaSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updateSpaFailure());
  }
};
