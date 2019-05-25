import React from "react"
import { Button, Image, List } from "semantic-ui-react"
import { optionalCallExpression } from "@babel/types"

const mapAccountTypeToIconName = {
  dépot: "briefcase",
  "Livret A": "book"
}

const redcueRenderAccount = (accumulator, account, index) => {
  accumulator.push(
    <List.Item className="account-container" key={index}>
      <List.Content verticalAlign="middle" floated="right">
        {account.balance}€
      </List.Content>
      <List.Icon
        name={mapAccountTypeToIconName[account.type]}
        size="large"
        verticalAlign="middle"
      />
      <List.Content>
        <List.Header as="a">{account.type}</List.Header>
        <List.Description as="a">Référence: {account.id}</List.Description>
      </List.Content>
    </List.Item>
  )

  accumulator.push(
    <List.Content className={"operations-container"} key={index + "operation"}>
      <List.List>
        {account.operations.map((operation, index2) => (
          <List.Item key={index2}>
            <List.Content verticalAlign="middle" floated="right">
              Montant: {account.balance}€
            </List.Content>
            <List.Content>
              <List.Header as="b">{operation.transferLabel}</List.Header>
              <List.Description>{new Date(operation.date).toLocaleDateString('fr-FR')}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List.List>
    </List.Content>
  )

  console.log(account)
  return accumulator
}

const AccountList = ({ accounts }) => (
  <List divided verticalAlign="middle">
    {accounts.reduce(redcueRenderAccount, [])}
  </List>
)

export default AccountList
