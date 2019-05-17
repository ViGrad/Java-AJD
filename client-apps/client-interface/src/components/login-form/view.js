import React from "react"
import { Button, Form } from "semantic-ui-react"
import { RESSOURCE_NAMES } from "../../reducers/ressource_names"

const LoginFormView = ({ firstName, name, password, onInputChange, logIn }) => {
  return (
    <Form style={{widths:"100%"}}>
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          onChange={onInputChange}
          value={firstName}
          name={RESSOURCE_NAMES.LOG_IN_FORM.FIRST_NAME}
          placeholder="Prénom"
          label="Prénom"
        />
        <Form.Input
          fluid
          onChange={onInputChange}
          value={name}
          name={RESSOURCE_NAMES.LOG_IN_FORM.NAME}
          placeholder="Nom"
          label="Nom"
        />
        <Form.Input
          fluid
          onChange={onInputChange}
          value={password}
          type="password"
          name={RESSOURCE_NAMES.LOG_IN_FORM.PASSWORD}
          placeholder="Mot de passe"
          label="Mot de passe"
        />
      </Form.Group>

      <Form.Button onClick={logIn}>Connection</Form.Button>
    </Form>
  )
}

export default LoginFormView
