import { CANDIDATES } from "../actions/types";

export default function candidateReducer(state = [], action) {
  switch (action.type) {
    case CANDIDATES:
      return action.candidates;
    default:
      return state;
  }
}
