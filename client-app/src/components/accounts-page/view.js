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
    <div className="account-page">
      <AddAccountForm
        onSubmit={onSubmitAddAccountForm}
        state={addAccountFormState}
        onChange={onInputChange}
      />
      <AccountList accounts={accounts} />
    </div>
  )
}

export default AccountsPage
