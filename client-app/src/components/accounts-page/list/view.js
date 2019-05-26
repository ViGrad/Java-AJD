import React from "react"
import { Button, Form, List, Select } from "semantic-ui-react"
import OperationItem from "./operation-item"

import "./index.css"
import genericComponents from "../../generic"
import { RESSOURCE_NAMES } from "../../../core/reducers/ressource_names"
import TransferForm from "./transfer-form"

const mapAccountTypeToIconName = {
  "Dépot": "briefcase",
  "Livret A": "book"
}

const AccountList = ({
  accounts,
  selected,
  onSelectAccount,
  onInputChange,
  transferFormState,
  onSubmitTransferForm
}) => (
  <List divided verticalAlign="middle">
    {accounts.map((account, index) => (
      <List.Item
        onClick={() => onSelectAccount(account.id)}
        className="account-container"
        key={index}
      >
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
        {account.id === selected.value ? (
          <List.Content key={index + "operation"}>
            <List.List>
              <List.Item>
                <TransferForm
                  onSubmit={onSubmitTransferForm}
                  state={transferFormState}
                  onInputChange={onInputChange}
                  account={account}
                  accounts={accounts.filter(acc => account.id !== acc.id)}
                />
              </List.Item>
              <List.Item className={"operations-container"}>
                {account.operations.map(operation => (
                  <OperationItem {...operation} />
                ))}
              </List.Item>
            </List.List>
          </List.Content>
        ) : (
          ""
        )}
      </List.Item>
    ))}
  </List>
)

export default AccountList
