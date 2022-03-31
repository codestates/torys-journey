import { combineReducers } from "redux";
import {
  Reducer,
  changeLoginStatus,
  changeModalStatus,
  restaurantEnrollment,
} from "./Reducer";

// export type RootState = ReturnType<typeof rootReducer>;
// reducer들을 모아주는 곳.

const rootReducer = combineReducers({
  Reducer,
  changeLoginStatus,
  changeModalStatus,
  restaurantEnrollment,
});

export default rootReducer;
