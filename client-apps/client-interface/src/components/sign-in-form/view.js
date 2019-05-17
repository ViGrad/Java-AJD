import React from "react"
import { Form } from "semantic-ui-react"
import { RESSOURCE_NAMES } from "../../core/reducers/ressource_names"

import "./index.css"
import genericComponents from "../generic";

const SignInFormView = ({
  firstName,
  name,
  password,
  onInputChange,
  onSubmit
}) => {
  return (
    <Form onSubmit={onSubmit} className="signIn-form">
      <genericComponents.Input
        onChange={onInputChange}
        state={firstName}
        name={RESSOURCE_NAMES.SIGN_IN_FORM.FIRST_NAME}
        placeholder="Prénom"
        label="Prénom"
      />
      <genericComponents.Input
        onChange={onInputChange}
        state={name}
        name={RESSOURCE_NAMES.SIGN_IN_FORM.NAME}
        placeholder="Nom"
        label="Nom"
      />
      <genericComponents.Input
        onChange={onInputChange}
        state={password}
        type="password"
        name={RESSOURCE_NAMES.SIGN_IN_FORM.PASSWORD}
        placeholder="Mot de passe"
        label="Mot de passe"
      />

      <Form.Button className="submit-button-container" type="submit">Créez votre compte</Form.Button>
    </Form>
  )
}

export default SignInFormView
