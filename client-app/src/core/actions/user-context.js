import { ACTION_TYPES } from "./types";

export const logIn = ({id, userProps = []}) => ({
  type: ACTION_TYPES.LOG_IN,
  value: {id, userProps}
})

export const logOut = () => ({
  type: ACTION_TYPES.LOG_OUT
})