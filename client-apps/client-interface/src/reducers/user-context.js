import { ACTION_TYPES } from "../actions/types"
import { combineReducers } from "redux"
import { getJsonValueByPath } from "../tools/get-json-value-by-path";

const isLogged = (state = false, { type, value, ...action }) => {
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

const PATH_TO_STATE = "userContext"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getIsLogged = state => transform(state).isLogged
