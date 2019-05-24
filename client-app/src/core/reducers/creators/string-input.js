import { ACTION_TYPES } from "../../actions/types"
import { combineReducers } from "redux"

export const createInputReducer = ({ defaultValue = "", ressourceName }) => {
  
  const value = (state = defaultValue, { type, value, ...action }) => {
    if (action.ressourceName !== ressourceName && ressourceName !== undefined) {
      return state
    }

    switch (type) {
      case ACTION_TYPES.SET_INPUT_VALUE:
        return value

      case ACTION_TYPES.RESET_INPUT:
        return defaultValue

      default:
        return state
    }
  }

  const errorMessage = (state = "", {type, value, ...action}) => {
    if (action.ressourceName !== ressourceName && ressourceName !== undefined) {
      return state
    }

    switch (type) {
      case ACTION_TYPES.SET_INPUT_ERROR_MESSAGE:
        return value

        case ACTION_TYPES.RESET_INPUT:
          return ""

      default:
        return state
    }
  }

  return combineReducers({ value, errorMessage })
}

