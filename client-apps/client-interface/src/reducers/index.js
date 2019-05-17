import { combineReducers } from "redux"
import userContext from "./user-context"
import loginForm from "./login-form"

export default combineReducers({
  userContext,
  loginForm
})