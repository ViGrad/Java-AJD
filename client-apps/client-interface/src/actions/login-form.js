import { ACTION_TYPES } from "./types";
import checkLoginFormValidityAndReturnErrors from "./utils/login-form-validator";
import { getLoginFormInputValues } from "../reducers/login-form";

export const updateLoginForm = ({value, ressourceName}) => ({
  type: ACTION_TYPES.UPDATE_INPUT_REDUCER,
  value,
  ressourceName,
})

export const trySendLoginForm = () => (dispatch, getState) => {
  const inputValues = getLoginFormInputValues(getState())
  const errors = checkLoginFormValidityAndReturnErrors(inputValues)
}