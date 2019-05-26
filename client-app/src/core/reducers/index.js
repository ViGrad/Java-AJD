import { combineReducers } from "redux"
import userContext from "./user-context"
import accounts from "./accounts"
import forms from "./forms"

export * from "./accounts"
export * from "./user-context"
export * from "./forms"

export default combineReducers({
  userContext,
  accounts,
  forms,
})