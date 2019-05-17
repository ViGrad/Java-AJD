import { combineReducers } from "redux";
import { createInputReducer } from "./creators/string-input";
import { RESSOURCE_NAMES } from "./ressource_names";
import { getJsonValueByPath } from "../tools/get-json-value-by-path";

export default combineReducers({
  firstName: createInputReducer({ressourceName: RESSOURCE_NAMES.LOG_IN_FORM.FIRST_NAME}),
  name: createInputReducer({ressourceName: RESSOURCE_NAMES.LOG_IN_FORM.NAME}),
  password: createInputReducer({ressourceName: RESSOURCE_NAMES.LOG_IN_FORM.PASSWORD})
})

const PATH_TO_STATE = "loginForm"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getLoginFormInputValues = state => transform(state)