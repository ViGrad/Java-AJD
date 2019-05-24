import React from "react"

const AccountList = ({ accounts }) => {
  return accounts.map(acc => (
    <div>
      {Object.keys(acc).map(key => (
        <p>
          {key}: {acc[key]}
        </p>
      ))}
    </div>
  ))
}

export default AccountList