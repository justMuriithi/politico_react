import { combineReducers } from "redux";
import user from "./userReducer";
import offices from "./officeReducer";

export default combineReducers({
  user,
  offices
});
