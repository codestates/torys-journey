import { combineReducers } from "redux";
import {
  changeLoginStatus,
  restaurantEnrollment,
  restaurantInformation,
hospitalEnrollment,
 parkEnrollment,
  //hotelInformation,
  //parkInformation,
  // hospitalInformation,

  search,
} from "./Reducer";

// export type RootState = ReturnType<typeof rootReducer>;
// reducer들을 모아주는 곳.

const rootReducer = combineReducers({
  changeLoginStatus,
  restaurantEnrollment,
  restaurantInformation,
  // hotelInformation,
   //parkInformation,
  // hospitalInformation,

  search,
  hospitalEnrollment,
  parkEnrollment
});

export default rootReducer;
