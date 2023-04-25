import axios from "axios";
import {
  getSlidersFailure,getSlidersStart,getSlidersSuccess,deleteSliderStart,
  deleteSliderSuccess,
  deleteSliderFailure,
  addSliderStart,
  addSliderSuccess,
  addSliderFailure
} from "./sliderRedux";
import {
  getAboutpageFailure,getAboutpageStart,getAboutpageSuccess,
} from "./aboutpageRedux";
import {
  getSpaFailure,getSpaStart,getSpaSuccess,deleteSpaStart,deleteSpaSuccess,deleteSpaFailure,addSpaStart,addSpaSuccess,addSpaFailure,updateSpaStart,updateSpaSuccess,updateSpaFailure,
} from "./addspaRedux";
import { loginFaliure, loginStart, loginSuccess,getloginStart,getloginFailure,getloginSuccess } from "./userRedux";
import {
  getElectricianFailure,getElectricianStart,getElectricianSuccess,addElectricianFailure,addElectricianStart,addElectricianSuccess,updateElectricianStart,updateElectricianSuccess,updateElectricianFailure,deleteElectricianStart,deleteElectricianSuccess,deleteElectricianFailure,
} from "./electricianRedux";
import {
  addAboutpageFailure,addAboutpageStart,addAboutpageSuccess,
} from "./aboutpageRedux";
import {
  getMansalonFailure,getMansalonStart,getMansalonSuccess,addMansalonFailure,addMansalonStart,addMansalonSuccess,updateMansalonStart,updateMansalonSuccess,updateMansalonFailure,deleteMansalonStart,deleteMansalonSuccess,deleteMansalonFailure,
} from "./mansalonRedux";
import {
  getWomansalonFailure,getWomansalonStart,getWomansalonSuccess,deleteWomansalonStart,deleteWomansalonSuccess,deleteWomansalonFailure,addWomansalonStart,addWomansalonSuccess,addWomansalonFailure,updateWomansalonStart,updateWomansalonSuccess,updateWomansalonFailure,
} from "./womanRedux";
import {
  getHomecleaningFailure,getHomecleaningStart,getHomecleaningSuccess,deleteHomecleaningStart,deleteHomecleaningSuccess,deleteHomecleaningFailure,addHomecleaningStart,addHomecleaningSuccess,addHomecleaningFailure,updateHomecleaningStart,updateHomecleaningSuccess,updateHomecleaningFailure,
} from "./homeclenerRedux";
import{
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
} from "./applianceRedux"
import {
  getCarpenterFailure,
  getCarpenterStart,
  getCarpenterSuccess,
  deleteCarpenterStart,
  deleteCarpenterSuccess,
  deleteCarpenterFailure,
  addCarpenterStart,
  addCarpenterSuccess,
  addCarpenterFailure,
  updateCarpenterStart,
  updateCarpenterSuccess,
  updateCarpenterFailure,
} from "./carpenterRedux";
import {  getDisinfectionFailure,
  getDisinfectionStart,
  getDisinfectionSuccess,
  deleteDisinfectionStart,
  deleteDisinfectionSuccess,
  deleteDisinfectionFailure,
  addDisinfectionStart,
  addDisinfectionSuccess,
  addDisinfectionFailure,
  updateDisinfectionStart,
  updateDisinfectionSuccess,
  updateDisinfectionFailure, } from "./disinfectionRedux";

  import {  getBathroomFailure,
    getBathroomStart,
    getBathroomSuccess,
    deleteBathroomStart,
    deleteBathroomSuccess,
    deleteBathroomFailure,
    addBathroomStart,
    addBathroomSuccess,
    addBathroomFailure,
    updateBathroomStart,
    updateBathroomSuccess,
    updateBathroomFailure, } from "./KitchenRedux";

    import {  getPlumberFailure,
      getPlumberStart,
      getPlumberSuccess,
      deletePlumberStart,
      deletePlumberSuccess,
      deletePlumberFailure,
      addPlumberStart,
      addPlumberSuccess,
      addPlumberFailure,
      updatePlumberStart,
      updatePlumberSuccess,
      updatePlumberFailure, } from "./plumberRedux";

import {   getBookingFailure,
  getBookingStart,
  getBookingSuccess,
  deleteBookingStart,
  deleteBookingSuccess,
  deleteBookingFailure,} from "./bookingRedux"

// Login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/admin/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFaliure());
  }
};

export const getLogin = async (dispatch) => {
  dispatch(getloginStart());
  try {
    const res = await axios.get("/auth");
    dispatch(getloginSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(getloginFailure());
  }
};
//Fetch Booking
export const getBooking = async (dispatch) => {
  dispatch(getBookingStart());
  try {
    const res = await axios.get("/booking");
    dispatch(getBookingSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(getBookingFailure());
  }
};
//Delete Booking
export const deleteBooking = async (id, dispatch) => {
  dispatch(deleteBookingStart());
  try {
    await axios.delete("/booking/" + id, {});
    dispatch(deleteBookingSuccess(id));
  } catch (error) {
    dispatch(deleteBookingFailure());
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

//ADD Slider
export const addSliders = async (product, dispatch) => {
  dispatch(addSliderStart());
  try {
    const res = await axios.post("/sliders", product, {});
    dispatch(addSliderSuccess(res.data));
  } catch (error) {
    dispatch(addSliderFailure());
  }
};
//Delete Sliders
export const deleteSliders = async (id, dispatch) => {
  dispatch(deleteSliderStart());
  try {
    await axios.delete("/sliders/" + id, {});
    dispatch(deleteSliderSuccess(id));
  } catch (error) {
    dispatch(deleteSliderFailure());
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET ALL APPLIANCE
export const getAppliance = async (dispatch) => {
  dispatch(getApplianceStart());
  try {
    const res = await axios.get("/appliance");
    dispatch(getApplianceSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getApplianceFailure());
  }
};

//ADD APPLIANCE
export const addAppliance = async (product, dispatch) => {
  dispatch(addApplianceStart());
  try {
    const res = await axios.post("/appliance", product, {});
    dispatch(addApplianceSuccess(res.data));
  } catch (error) {
    dispatch(addApplianceFailure());
  }
};

//DELETE APPLIANCE
export const deleteAppliance = async (id, dispatch) => {
  dispatch(deleteApplianceStart());
  try {
    await axios.delete("/appliance/" + id, {});
    dispatch(deleteApplianceSuccess(id));
  } catch (error) {
    dispatch(deleteApplianceFailure());
  }
};

// UPDATE APPLIANCE
export const updateAppliance = async (id, updatedList, dispatch) => {
  dispatch(updateApplianceStart());
  try {
    const res = await axios.put("/appliance/" + id, updatedList, {});
    dispatch(updateApplianceSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updateApplianceFailure());
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET ALL CARPENTER
export const getCarpenter = async (dispatch) => {
  dispatch(getCarpenterStart());
  try {
    const res = await axios.get("/carpenter");
    dispatch(getCarpenterSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getCarpenterFailure());
  }
};

//ADD CARPENTER
export const addCarpenter = async (product, dispatch) => {
  dispatch(addCarpenterStart());
  try {
    const res = await axios.post("/carpenter", product, {});
    dispatch(addCarpenterSuccess(res.data));
  } catch (error) {
    dispatch(addCarpenterFailure());
  }
};

//DELETE CARPENTER
export const deleteCarpenter = async (id, dispatch) => {
  dispatch(deleteApplianceStart());
  try {
    await axios.delete("/carpenter/" + id, {});
    dispatch(deleteCarpenterSuccess(id));
  } catch (error) {
    dispatch(deleteCarpenterFailure());
  }
};

// UPDATE CARPENTER
export const updateCarpenter = async (id, updatedList, dispatch) => {
  dispatch(updateCarpenterStart());
  try {
    const res = await axios.put("/carpenter/" + id, updatedList, {});
    dispatch(updateCarpenterSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updateCarpenterFailure());
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET ALL DISINFETION
export const getDisinfection = async (dispatch) => {
  dispatch(getDisinfectionStart());
  try {
    const res = await axios.get("/disinfection");
    dispatch(getDisinfectionSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getDisinfectionFailure());
  }
};

//ADD DISINFETION
export const addDisinfection = async (product, dispatch) => {
  dispatch(addCarpenterStart());
  try {
    const res = await axios.post("/disinfection", product, {});
    dispatch(addDisinfectionSuccess(res.data));
  } catch (error) {
    dispatch(addDisinfectionFailure());
  }
};

//DELETE DISINFETION
export const deleteDisinfection = async (id, dispatch) => {
  dispatch(deleteApplianceStart());
  try {
    await axios.delete("/disinfection/" + id, {});
    dispatch(deleteDisinfectionSuccess(id));
  } catch (error) {
    dispatch(deleteDisinfectionFailure());
  }
};

// UPDATE DISINFETION
export const updateDisinfection = async (id, updatedList, dispatch) => {
  dispatch(updateDisinfectionStart());
  try {
    const res = await axios.put("/disinfection/" + id, updatedList, {});
    dispatch(updateDisinfectionSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updateDisinfectionFailure());
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Fetch HOMECLEANING
export const getHomecleaning = async (dispatch) => {
  dispatch(getHomecleaningStart());
  try {
    const res = await axios.get("/fullhomecleaning");
    dispatch(getHomecleaningSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getHomecleaningFailure());
  }
};

//ADD HOMECLEANING
export const addHomecleaning = async (product, dispatch) => {
  dispatch(addHomecleaningStart());
  try {
    const res = await axios.post("/fullhomecleaning", product, {});
    dispatch(addHomecleaningSuccess(res.data));
  } catch (error) {
    dispatch(addHomecleaningFailure());
  }
};

//DELETE HOMECLEANING
export const deleteHomecleaning = async (id, dispatch) => {
  dispatch(deleteApplianceStart());
  try {
    await axios.delete("/fullhomecleaning/" + id, {});
    dispatch(deleteHomecleaningSuccess(id));
  } catch (error) {
    dispatch(deleteHomecleaningFailure());
  }
};

// UPDATE HOMECLEANING
export const updateHomecleaning = async (id, updatedList, dispatch) => {
  dispatch(updateHomecleaning());
  try {
    const res = await axios.put("/fullhomecleaning/" + id, updatedList, {});
    dispatch(updateHomecleaningSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updateHomecleaningFailure());
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET ALL KITCHAN AND BATHROOM
export const getBathroom = async (dispatch) => {
  dispatch(getBathroomStart());
  try {
    const res = await axios.get("/bathroom");
    dispatch(getBathroomSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getBathroomFailure());
  }
};

//ADD KITCHAN AND BATHROOM
export const addBathroom = async (product, dispatch) => {
  dispatch(addBathroomStart());
  try {
    const res = await axios.post("/bathroom", product, {});
    dispatch(addBathroomSuccess(res.data));
  } catch (error) {
    dispatch(addBathroomFailure());
  }
};

//DELETE KITCHAN AND BATHROOM
export const deleteBathroom = async (id, dispatch) => {
  dispatch(deleteBathroomStart());
  try {
    await axios.delete("/bathroom/" + id, {});
    dispatch(deleteBathroomSuccess(id));
  } catch (error) {
    dispatch(deleteBathroomFailure());
  }
};

// UPDATE KITCHAN AND BATHROOM
export const updateBathroom = async (id, updatedList, dispatch) => {
  dispatch(updateBathroomStart());
  try {
    const res = await axios.put("/bathroom/" + id, updatedList, {});
    dispatch(updateBathroomSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updateBathroomFailure());
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET ALL PLUMBER
export const getPlumber = async (dispatch) => {
  dispatch(getBathroomStart());
  try {
    const res = await axios.get("/plumber");
    dispatch(getPlumberSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getPlumberFailure());
  }
};

//ADD PLUMBER
export const addPlumber = async (product, dispatch) => {
  dispatch(addBathroomStart());
  try {
    const res = await axios.post("/plumber", product, {});
    dispatch(addPlumberSuccess(res.data));
  } catch (error) {
    dispatch(addPlumberFailure());
  }
};

//DELETE PLUMBER
export const deletePlumber = async (id, dispatch) => {
  dispatch(deletePlumberStart());
  try {
    await axios.delete("/plumber/" + id, {});
    dispatch(deletePlumberSuccess(id));
  } catch (error) {
    dispatch(deletePlumberFailure());
  }
};

// UPDATE PLUMBER
export const updatePlumber = async (id, updatedList, dispatch) => {
  dispatch(updatePlumberStart());
  try {
    const res = await axios.put("/plumber/" + id, updatedList, {});
    dispatch(updatePlumberSuccess(id, updatedList, res));
  } catch (error) {
    dispatch(updatePlumberFailure());
  }
};
