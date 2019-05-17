import { ACTION_TYPES } from "../../actions/types"
import { combineReducers } from "redux"

export const createInputReducer = ({ defaultValue = "", ressourceName }) => {
  
  const value = (state = defaultValue, { type, value, ...action }) => {
    if (action.ressourceName !== ressourceName && ressourceName !== undefined) {
      return state
    }

    switch (type) {
      case ACTION_TYPES.UPDATE_INPUT_REDUCER:
        return value

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

      default:
        return state
    }
  }

  return combineReducers({ value, errorMessage })
}

