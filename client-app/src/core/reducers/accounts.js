import {
  fetchedListCreator,
  getValues,
  getIsLoading
} from "./creators/fetched-list"
import { RESSOURCE_NAMES } from "./ressource_names"
import { getJsonValueByPath } from "../../tools/get-json-value-by-path"
import { combineReducers } from "../../../../../../../../Library/Caches/typescript/3.4.5/node_modules/@types/react-redux/node_modules/redux"
import { createInputReducer } from "./creators/string-input"

const values = fetchedListCreator({
  ressourceName: RESSOURCE_NAMES.ACCOUNTS.LIST
})

const selected = createInputReducer({
  defaultValue: -1,
  ressourceName: RESSOURCE_NAMES.ACCOUNTS.SELECTED
})

export default combineReducers({
  values,
  selected
})

const PATH_TO_STATE = "accounts"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getAccounts = (state, filterCallback) => getValues(transform(state), filterCallback).values
export const getAccountsIsLoading = state =>
  getIsLoading(transform(state)).values

export const getSelectedAccount = state => transform(state).selected

