import { LOGIN, PROFILE } from "../actions/types";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case LOGIN:
      return [action.payload];
    case PROFILE:
      return [action.payload];
    default:
      return state;
  }
}
