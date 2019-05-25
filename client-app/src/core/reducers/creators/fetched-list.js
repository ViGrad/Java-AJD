import { ACTION_TYPES } from "../../actions/types"
import { combineReducers } from "redux"

export const fetchedListCreator = ({ ressourceName, defaultValue = [] }) => {
  const values = (state = defaultValue, { type, value, ...action }) => {
    if (action.ressourceName !== ressourceName && ressourceName !== undefined) {
      return state
    }

    switch (type) {
      case ACTION_TYPES.SET_FETCHED_LIST_VALUES:
        return value

      default:
        return state
    }
  }

  const isLoading = (state = 0, { type, ...action }) => {
    if (action.ressourceName !== ressourceName && ressourceName !== undefined) {
      return state
    }

    switch (type) {
      case ACTION_TYPES.START_FETCHING:
        return state + 1

      case ACTION_TYPES.FETCHING_ERROR:
      case ACTION_TYPES.FETCHING_SUCCESS:
        return state - 1

      default:
        return state
    }
  }

  return combineReducers({
    values,
    isLoading
  })
}

export const getValues = (state, filterCallback) =>
  filterCallback ? state.values.filter(filterCallback) : state.values

export const getIsLoading = state => state.isLoading > 0
