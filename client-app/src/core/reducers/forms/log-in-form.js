import { combineReducers } from "redux"
import { createInputReducer } from "../creators/string-input"
import { RESSOURCE_NAMES } from "../ressource_names"
import { getJsonValueByPath } from "../../../tools/get-json-value-by-path"

export default combineReducers({
  [RESSOURCE_NAMES.LOG_IN_FORM.LOGIN]: createInputReducer({
    ressourceName: RESSOURCE_NAMES.LOG_IN_FORM.LOGIN
  }),
  [RESSOURCE_NAMES.LOG_IN_FORM.PASSWORD]: createInputReducer({
    ressourceName: RESSOURCE_NAMES.LOG_IN_FORM.PASSWORD
  }),
})

const PATH_TO_STATE = "forms.logInForm"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getlogInFormInputValues = state => {
  const reducerState = transform(state)
  return Object.keys(reducerState).reduce(
    (accumulator, key) => ({
      [key]: reducerState[key].value,
      ...accumulator
    }),
    {}
  )
}
export const getLogInFormInputState = state => transform(state)
