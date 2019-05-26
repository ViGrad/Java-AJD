import { $fetchUserAccounts, $createAccount } from "../requests"
import { ACTION_TYPES } from "./types"
import { RESSOURCE_NAMES } from "../reducers/ressource_names"
import { getUserId, getAccountFormValues } from "../reducers"

export const setUserAccounts = ({ accounts }) => ({
  type: ACTION_TYPES.SET_FETCHED_LIST_VALUES,
  value: accounts,
  ressourceName: RESSOURCE_NAMES.ACCOUNTS.LIST
})

export const fetchAccounts = () => (dispatch, getState) => {
  const userId = getUserId(getState())

  $fetchUserAccounts(userId).then(res => {
    dispatch(setUserAccounts({ accounts: res }))
  })
}

export const createAccount = () => (dispatch, getState) => {
  const userId = getUserId(getState())
  const formValues = getAccountFormValues(getState())

  $createAccount(userId, formValues).then(res => dispatch(fetchAccounts()))
}
