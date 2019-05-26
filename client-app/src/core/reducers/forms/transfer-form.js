import { combineReducers } from "redux"
import { RESSOURCE_NAMES } from "../ressource_names"
import { createInputReducer } from "../creators/string-input"
import { getJsonValueByPath } from "../../../tools/get-json-value-by-path"

export default combineReducers({
  [RESSOURCE_NAMES.TRANSFER_FORM.RECIPIENT]: createInputReducer({
    defaultValue: -1,
    ressourceName: RESSOURCE_NAMES.TRANSFER_FORM.RECIPIENT
  }),
  [RESSOURCE_NAMES.TRANSFER_FORM.LABEL]: createInputReducer({
    ressourceName: RESSOURCE_NAMES.TRANSFER_FORM.LABEL
  }),
  [RESSOURCE_NAMES.TRANSFER_FORM.AMOUNT]: createInputReducer({
    defaultValue: 0,
    ressourceName: RESSOURCE_NAMES.TRANSFER_FORM.AMOUNT
  })
})

const PATH_TO_STATE = "forms.transferForm"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getTransferFormState = state => transform(state)

export const getTransferFormValues = state => {
  const actualState = transform(state)
  return Object.keys(actualState).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: actualState[key].value
    }),
    {}
  )
}
