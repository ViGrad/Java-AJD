import { ACTION_TYPES } from "../actions/types"
import { combineReducers } from "redux"
import { getJsonValueByPath } from "../../tools/get-json-value-by-path"

const isLogged = (state = false, { type, ...action }) => {
  switch (type) {
    case ACTION_TYPES.LOG_IN:
      return true

    case ACTION_TYPES.LOG_OUT:
      return false

    default:
      return state
  }
}

const id = (state = null, { type, value, ...action }) => {
  switch (type) {
    case ACTION_TYPES.LOG_IN:
      return value.id

    case ACTION_TYPES.LOG_OUT:
      return null

    default:
      return state
  }
}

const userProps = (state = {}, { type, value }) => {
  switch(type) {
    case ACTION_TYPES.LOG_IN:
      return value.userProps

    case ACTION_TYPES.LOG_OUT:
      return {}

    default:
      return state
  }
}

export default combineReducers({
  isLogged,
  id,
  userProps
})

const PATH_TO_STATE = "userContext"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getIsLogged = state => transform(state).isLogged
export const getUserId = state => transform(state).id