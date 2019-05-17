import { combineReducers } from "redux"
import { createInputReducer } from "./creators/string-input"
import { RESSOURCE_NAMES } from "./ressource_names"
import { getJsonValueByPath } from "../../tools/get-json-value-by-path"

export default combineReducers({
  [RESSOURCE_NAMES.LOG_IN_FORM.FIRST_NAME]: createInputReducer({
    ressourceName: RESSOURCE_NAMES.LOG_IN_FORM.FIRST_NAME
  }),
  [RESSOURCE_NAMES.LOG_IN_FORM.NAME]: createInputReducer({
    ressourceName: RESSOURCE_NAMES.LOG_IN_FORM.NAME
  }),
  [RESSOURCE_NAMES.LOG_IN_FORM.PASSWORD]: createInputReducer({
    ressourceName: RESSOURCE_NAMES.LOG_IN_FORM.PASSWORD
  })
})

const PATH_TO_STATE = "loginForm"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getLoginFormInputValues = state => transform(state)
export const getLoginFormInputState = state => transform(state)
