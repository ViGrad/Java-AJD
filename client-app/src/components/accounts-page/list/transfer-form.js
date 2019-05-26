import React from "react"
import { Select, Form } from "semantic-ui-react";
import { RESSOURCE_NAMES } from "../../../core/reducers/ressource_names";
import genericComponents from "../../generic";
import { arrayToOptions } from "../../../tools/json-to-option";

const TransferForm = ({account, accounts, state, onSubmit, onInputChange}) => (
  <Form onSubmit={() => onSubmit(account.id)} className="operations-form">
    <genericComponents.Input
      search
      control={Select}
      onChange={onInputChange}
      options={arrayToOptions(accounts, {key: "id", value: "id", text: "id"})}
      state={state[RESSOURCE_NAMES.TRANSFER_FORM.RECIPIENT]}
      name={RESSOURCE_NAMES.TRANSFER_FORM.RECIPIENT}
      placeholder="ID du compte de destination"
    />
    <genericComponents.Input
      onChange={onInputChange}
      state={state[RESSOURCE_NAMES.TRANSFER_FORM.LABEL]}
      name={RESSOURCE_NAMES.TRANSFER_FORM.LABEL}
      placeholder="Label"
    />
    <genericComponents.Input
      onChange={onInputChange}
      state={state[RESSOURCE_NAMES.TRANSFER_FORM.AMOUNT]}
      name={RESSOURCE_NAMES.TRANSFER_FORM.AMOUNT}
      placeholder="Montant"
      type="number"
      min="0"
      max={account.balance}
    />
    <Form.Button type="submit">Valider</Form.Button>
  </Form>
)

export default TransferForm