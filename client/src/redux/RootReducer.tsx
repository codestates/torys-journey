import { combineReducers } from "redux";
import {
  Reducer,
  changeLoginStatus,
  changeModalStatus,
  restaurantInformation,
} from "./Reducer";

// export type RootState = ReturnType<typeof rootReducer>;
// reducer들을 모아주는 곳.

const rootReducer = combineReducers({
  Reducer,
  changeLoginStatus,
  changeModalStatus,
  restaurantInformation,
});

export default rootReducer;
