import { ACTION_TYPES } from "./types"
import checkSignInFormValidityAndReturnErrors from "./utils/sign-in-form-validator"
import { getSignInFormInputValues } from "../reducers/sign-in-form"

export const updateSignInForm = ({ value, ressourceName }) => ({
  type: ACTION_TYPES.UPDATE_INPUT_REDUCER,
  value,
  ressourceName
})

export const setInputErrorMessage = ({ value, ressourceName }) => ({
  type: ACTION_TYPES.SET_INPUT_ERROR_MESSAGE,
  value,
  ressourceName
})

export const trySendSignInForm = () => (dispatch, getState) => {
  const inputValues = getSignInFormInputValues(getState())
  const errors = checkSignInFormValidityAndReturnErrors(inputValues)
  Object.keys(errors).forEach(key => {
    dispatch(setInputErrorMessage({ value: errors[key], ressourceName: key }))
  })
}
