import React from "react"

import "./index.css"
import AccountList from "./list"
import AddAccountForm from "./add-account-form"

const AccountsPage = ({}) => {
  return (
    <div className="account-page">
      <AddAccountForm />
      <AccountList />
    </div>
  )
}

export default AccountsPage
