import { INCREASE, DECREASE, STOP_COUNTER, INCREASE_DONE } from "../actions/type";

const initialState = 0

export default function(state = initialState, action) {
  switch (action.type) {
    //case INCREASE_DONE:
    case INCREASE:
      return state + 1
    case DECREASE:
      return state - 1
    case STOP_COUNTER:
      return 0
    default:
      return state
  }
}
//function update state counter while user interact