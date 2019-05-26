import { $makeTransfer } from "../requests"
import { getTransferFormValues } from "../reducers"
import { fetchAccounts } from "./accounts"

export const makeTransfer = fromAccountId => (dispatch, getState) => {
  const formValues = getTransferFormValues(getState())
  return $makeTransfer({
    fromAccountId,
    toAccountId: formValues.transferRecipient,
    label: formValues.transferLabel,
    amount: formValues.transferAmount
  }).then(res => {
    dispatch(fetchAccounts())
  })
}
