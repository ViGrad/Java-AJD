import React from "react"
import { Button, Form } from "semantic-ui-react"
import { RESSOURCE_NAMES } from "../../reducers/ressource_names"

const LoginFormView = ({ firstName, name, password, onInputChange, logIn }) => {
  console.log(onInputChange)
  return (
    <Form>
      <Form.Field>
        <label>Prénom : </label>
        <input
          onChange={onInputChange}
          value={firstName}
          name={RESSOURCE_NAMES.LOG_IN_FORM.FIRST_NAME}
          placeholder="Prénom"
        />
      </Form.Field>
      <Button onClick={logIn}>Connection</Button>
    </Form>
  )
}

export default LoginFormView
