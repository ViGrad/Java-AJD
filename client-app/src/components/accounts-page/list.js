import React from "react"
import { Button, Image, List } from "semantic-ui-react"

const mapAccountTypeToIconName = {
  "dépot": "briefcase",
  "Livret A": "book"
}

const renderAccount = (account, index) => (
  <List.Item key={index}>
    <List.Content verticalAlign="middle" floated="right">{account.balance}€</List.Content>
    <List.Icon name={mapAccountTypeToIconName[account.type]} size="large" verticalAlign="middle" />
    <List.Content>
      <List.Header as="a">{account.type}</List.Header>
      <List.Description as="a">Référence: {account.id}</List.Description>
    </List.Content>
  </List.Item>
)

const AccountList = ({ accounts }) => (
  <List divided verticalAlign="middle">
    {accounts.map(renderAccount)}
  </List>
)

export default AccountList
