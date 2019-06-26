import { combineReducers } from "redux";
import user from "./userReducer";
import offices from "./officeReducer";
import candidates from "./candidateReducer"

export default combineReducers({
  user,
  offices,
  candidates
});
