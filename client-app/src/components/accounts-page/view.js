import React from "react"

import "./index.css"
import AccountList from "./list"
import AddAccountForm from "./add-account-form"

const AccountsPage = ({
  accounts,
  onSubmitAddAccountForm,
  addAccountFormState,
  onInputChange
}) => {
  return (
    <div>
      <AccountList accounts={accounts} />
      <AddAccountForm
        onSubmit={onSubmitAddAccountForm}
        state={addAccountFormState}
        onChange={onInputChange}
      />
    </div>
  )
}

export default AccountsPage
