import { ACTION_TYPES } from "../../actions/types";

export const createInputReducer = ({ defaultValue = "", ressourceName }) => (
  state = defaultValue,
  {type, value, ...action}
) => {
  if(action.ressourceName !== ressourceName && ressourceName !== undefined) {
    return state
  }

  switch(type) {
    case ACTION_TYPES.UPDATE_INPUT_REDUCER:
      return value

    default:
      return state
  }
}

