import { combineReducers } from "redux";
import {
  changeLoginStatus,
  restaurantEnrollment,
  restaurantInformation,
  search,
} from "./Reducer";

// export type RootState = ReturnType<typeof rootReducer>;
// reducer들을 모아주는 곳.

const rootReducer = combineReducers({
  changeLoginStatus,
  restaurantEnrollment,
  restaurantInformation,
  search,
});

export default rootReducer;
