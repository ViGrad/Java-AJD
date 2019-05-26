import addAccountForm from "./add-account-form"
import logInForm from "./log-in-form"
import signInForm from "./sign-in-form"
import transferForm from "./transfer-form"
import { combineReducers } from "redux"

export * from "./add-account-form"
export * from "./log-in-form"
export * from "./sign-in-form"
export * from "./transfer-form"

export default combineReducers({
  addAccountForm,
  logInForm,
  signInForm,
  transferForm
})