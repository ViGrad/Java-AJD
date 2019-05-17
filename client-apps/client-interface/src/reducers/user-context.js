import { ACTION_TYPES } from "../actions/types";
import { combineReducers } from "redux";

const isLogged = (state = true, {type, value, ...action}) => {
  switch (type) {
    case ACTION_TYPES.LOG_IN:
      return true

    case ACTION_TYPES.LOG_OUT:
      return false 

    default:
      return state
  }
}

export default combineReducers({
  isLogged
})


export const getIsLogged = (state) => state.userContext.isLogged