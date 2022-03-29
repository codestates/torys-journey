import { createStore } from "redux";
import rootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());
// console.log(store);
export default store;
