import { ACTION_TYPES } from "./types";

export const logIn = () => ({
  type: ACTION_TYPES.LOG_IN,
})

export const logOut = () => ({
  type: ACTION_TYPES.LOG_OUT
})