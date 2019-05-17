import { combineReducers } from "redux"
import userContext from "./user-context"
import signInForm from "./sign-in-form"

export default combineReducers({
  userContext,
  signInForm
})