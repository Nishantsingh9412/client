import { combineReducers } from "redux";

import windowReducer from "./window";
import { saveReducer } from "./saved";
import gardenReducer from "./garden";
import residentialReducer from "./residential";
import CommercialReducer from "./commercial";
import hoursReducer from "./hours";
import addressReducer from './address';
import TotalpriceReducer from "./priceReducer";

export default combineReducers({
    windowReducer,
    saveReducer,
    gardenReducer,
    residentialReducer,
    CommercialReducer,
    hoursReducer,
    addressReducer,
    TotalpriceReducer,
})