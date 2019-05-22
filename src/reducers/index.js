import { combineReducers } from "redux";
import user from "./userReducer";
import office from "./officeReducer";

export default combineReducers({
  user: user,
  office: office
});
