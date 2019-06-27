import { OFFICES } from "../actions/types";

export default function officeReducer(state = [], action) {
  switch (action.type) {
    case OFFICES:
      return [action.offices];
    default:
      return state;
  }
}
