import { combineReducers } from "redux";
import { changeLoginStatus, restaurantEnrollment } from "./Reducer";

// export type RootState = ReturnType<typeof rootReducer>;
// reducer들을 모아주는 곳.

const rootReducer = combineReducers({
  changeLoginStatus,
  restaurantEnrollment,
});

export default rootReducer;
