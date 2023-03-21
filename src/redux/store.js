import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import sliderReducer from "./sliderRedux";
import addspaRedux from "./addspaRedux";
import aboutpageReducer from "./aboutpageRedux"
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import electricianRedux from "./electricianRedux";
import mansalonRedux from "./mansalonRedux";
import womanRedux from "./womanRedux";
import homeclenerRedux from "./homeclenerRedux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  sliders: sliderReducer,
  aboutpage: aboutpageReducer,
  spa: addspaRedux,
  electrician: electricianRedux,
  mansalon: mansalonRedux,
  womansalon:womanRedux,
  homecleaning:homeclenerRedux,
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,],
      },
    }),
});

export let persistor = persistStore(store);
