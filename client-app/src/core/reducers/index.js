import { combineReducers } from "redux"
import userContext from "./user-context"
import signInForm from "./sign-in-form"
import logInForm from "./log-in-form"
import accounts from "./accounts"
import addAccountForm from "./add-account-form"

export default combineReducers({
  userContext,
  signInForm,
  accounts,
  addAccountForm,
  logInForm
})