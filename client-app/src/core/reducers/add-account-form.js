import { combineReducers } from "redux"
import { RESSOURCE_NAMES } from "./ressource_names"
import { createInputReducer } from "./creators/string-input"
import { getJsonValueByPath } from "../../tools/get-json-value-by-path"

export default combineReducers({
  [RESSOURCE_NAMES.ADD_ACCOUNT_FORM
    .ADD_ACCOUNT_FORM_ACCOUNT_TYPE]: createInputReducer({
    defaultValue: 1,
    ressourceName:
      RESSOURCE_NAMES.ADD_ACCOUNT_FORM.ADD_ACCOUNT_FORM_ACCOUNT_TYPE
  }),
  [RESSOURCE_NAMES.ADD_ACCOUNT_FORM.INITAL_AMOUNT]: createInputReducer({
    defaultValue: 0,
    ressourceName: RESSOURCE_NAMES.ADD_ACCOUNT_FORM.INITAL_AMOUNT
  })
})

const PATH_TO_STATE = "addAccountForm"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getAccountFormState = state => transform(state)

export const getAccountFormValues = state => {
  const actualState = transform(state)
  return Object.keys(actualState).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: actualState[key].value
    }),
    {}
  )
}
