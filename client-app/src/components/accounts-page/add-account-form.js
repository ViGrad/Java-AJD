import React from "react"
import { Form } from "semantic-ui-react"
import genericComponents from "../generic"

const accountTypes = [
  {
    value: 1,
    text: "Dépôt"
  },
  {
    value: 2,
    text: "Livret A"
  }
]

const AddAccountForm = ({ onSubmit, state, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Dropdown
        name="accountType"
        value={state.accountType.value}
        onChange={onChange}
        options={accountTypes}
      />
      <genericComponents.Input
        name="initialAmount"
        state={state.initialAmount}
        onChange={onChange}
        type="number"
        min={0}
      />
      <Form.Button type="submit">Créer</Form.Button>
    </Form>
  )
}

export default AddAccountForm
