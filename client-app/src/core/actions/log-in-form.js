import { getlogInFormInputValues } from "../reducers"
import { $sendLoginForm } from "../requests/log-in"
import { resetInput } from "./sign-in-form"
import { logIn } from "./user-context"
import { RESSOURCE_NAMES } from "../reducers/ressource_names"

export const sendLoginForm = () => (dispatch, getState) => {
  const inputValues = getlogInFormInputValues(getState())
  const renamedInputValues = {
    id: inputValues[RESSOURCE_NAMES.LOG_IN_FORM.LOGIN],
    password: inputValues[RESSOURCE_NAMES.LOG_IN_FORM.PASSWORD]
  }

  Object.keys(renamedInputValues).forEach(key => {
    dispatch(resetInput({ ressourceName: key }))
  })

  $sendLoginForm(renamedInputValues).then(res => {
    if (res === true) {
      dispatch(logIn({ id: renamedInputValues.id }))
    }
  })
}
