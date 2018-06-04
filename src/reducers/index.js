import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

export default combineReducers({
  counter: counterReducer
})
//combine child reducers to only reducer into store