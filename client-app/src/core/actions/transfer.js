import { $makeTransfer } from "../requests"
import { getTransferFormValues } from "../reducers"
import { fetchAccounts } from "./accounts"
import { resetInput } from "./sign-in-form";

export const makeTransfer = fromAccountId => (dispatch, getState) => {
  const formValues = getTransferFormValues(getState())

  Object.keys(formValues).forEach(key => {
    dispatch(resetInput({ ressourceName: key }))
  })

  return $makeTransfer({
    fromAccountId,
    toAccountId: formValues.transferRecipient,
    label: formValues.transferLabel,
    amount: formValues.transferAmount
  }).then(res => {
    dispatch(fetchAccounts())
  })
}
