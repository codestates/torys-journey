import { combineReducers } from "redux";
import {
  Reducer,
  changeLoginStatus,
  changeModalStatus,
  restaurantInformation,
  restaurantEnrollment,
} from "./Reducer";

// export type RootState = ReturnType<typeof rootReducer>;
// reducer들을 모아주는 곳.

const rootReducer = combineReducers({
  Reducer,
  changeLoginStatus,
  changeModalStatus,
  restaurantInformation,
  restaurantEnrollment,
});

export default rootReducer;
