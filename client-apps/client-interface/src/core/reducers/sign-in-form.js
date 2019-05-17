import { combineReducers } from "redux"
import { createInputReducer } from "./creators/string-input"
import { RESSOURCE_NAMES } from "./ressource_names"
import { getJsonValueByPath } from "../../tools/get-json-value-by-path"

export default combineReducers({
  [RESSOURCE_NAMES.SIGN_IN_FORM.FIRST_NAME]: createInputReducer({
    ressourceName: RESSOURCE_NAMES.SIGN_IN_FORM.FIRST_NAME
  }),
  [RESSOURCE_NAMES.SIGN_IN_FORM.LAST_NAME]: createInputReducer({
    ressourceName: RESSOURCE_NAMES.SIGN_IN_FORM.LAST_NAME
  }),
  [RESSOURCE_NAMES.SIGN_IN_FORM.PASSWORD]: createInputReducer({
    ressourceName: RESSOURCE_NAMES.SIGN_IN_FORM.PASSWORD
  })
})

const PATH_TO_STATE = "signInForm"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getSignInFormInputValues = state => {
  const reducerState = transform(state)
  return Object.keys(reducerState).reduce(
    (accumulator, key) => ({
      [key]: reducerState[key].value,
      ...accumulator
    }),
    {}
  )
}
export const getSignInFormInputState = state => transform(state)
