import React from "react"
import { Button, Image, List } from "semantic-ui-react"
import OperationItem from "./operation-item"

import "./index.css"

const mapAccountTypeToIconName = {
  dépot: "briefcase",
  "Livret A": "book"
}

const AccountList = ({ accounts }) => (
  <List divided verticalAlign="middle">
    {accounts.map((account, index) => (
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

        <List.Content
          className={"operations-container"}
          key={index + "operation"}
        >
          <List.List>
            {account.operations.map(operation => (
              <OperationItem {...operation} />
            ))}
          </List.List>
        </List.Content>
      </List.Item>
    ))}
  </List>
)

export default AccountList
