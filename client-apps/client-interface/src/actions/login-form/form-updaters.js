import { ACTION_TYPES } from "../types";

export const updateLoginForm = ({value, ressourceName}) => ({
  type: ACTION_TYPES.UPDATE_INPUT_REDUCER,
  value,
  ressourceName,
})