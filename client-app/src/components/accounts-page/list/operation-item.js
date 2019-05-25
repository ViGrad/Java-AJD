import React from "react"
import { List } from "semantic-ui-react"

const OperationItem = ({amount, transferLabel, date}) => (
  <List.Item >
    <List.Content verticalAlign="middle" floated="right">
      Montant: {amount}€
    </List.Content>
    <List.Content>
      <List.Header as="b">{transferLabel}</List.Header>
      <List.Description>
        {new Date(date).toLocaleDateString("fr-FR")}
      </List.Description>
    </List.Content>
  </List.Item>
)

export default OperationItem



