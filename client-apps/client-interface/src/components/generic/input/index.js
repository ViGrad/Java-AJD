import React from "react"
import { Form } from "semantic-ui-react"

import "./index.css"

const Input = ({ state, ...props }) => (
  <div className="generic-input-container">
    <Form.Input
      value={state.value}
      error={state.errorMessage !== ""}
      {...props}
    />
    <p className="error-message">{state.errorMessage}</p>
  </div>
)

export default Input