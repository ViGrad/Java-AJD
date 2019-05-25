import React from "react"
import { Form, Select } from "semantic-ui-react"
import genericComponents from "../../generic"

import "./index.css"

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

const AddAccountFormView = ({ onSubmit, state, onChange }) => {
  return (
    <Form className="add-account-form" onSubmit={onSubmit}>
      <genericComponents.Input
        control={Select}
        name="accountType"
        state={state.accountType}
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

export default AddAccountFormView
