import { ACTION_TYPES } from "./types"
import checkSignInFormValidityAndReturnErrors from "./utils/sign-in-form-validator"
import { getSignInFormInputValues } from "../reducers/sign-in-form"
import { logIn } from "./user-context"
import { isNotAnyErrorInFormValidityResponse } from "../../tools/controls"
import { $sendSignInForm } from "./requests/sign-in"

export const updateSignInForm = ({ value, ressourceName }) => ({
  type: ACTION_TYPES.SET_INPUT_VALUE,
  value,
  ressourceName
})

export const setInputErrorMessage = ({ value, ressourceName }) => ({
  type: ACTION_TYPES.SET_INPUT_ERROR_MESSAGE,
  value,
  ressourceName
})

export const resetInput = ({ ressourceName }) => ({
  type: ACTION_TYPES.RESET_INPUT,
  ressourceName
})

export const trySendSignInForm = () => (dispatch, getState) => {
  const inputValues = getSignInFormInputValues(getState())
  const errors = checkSignInFormValidityAndReturnErrors(inputValues)

  Object.keys(errors).forEach(key => {
    dispatch(setInputErrorMessage({ value: errors[key], ressourceName: key }))
  })

  if (isNotAnyErrorInFormValidityResponse(errors)) {
    Object.keys(errors).forEach(key => {
      dispatch(resetInput({ ressourceName: key }))
    })

    $sendSignInForm({ inputValues }).then(res => {
      const { password, ...userProps } = inputValues
      dispatch(logIn({ id: res, userProps }))
    })
  }
}
