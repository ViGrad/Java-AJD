import React from "react"
import { Form } from "semantic-ui-react"
import { RESSOURCE_NAMES } from "../../core/reducers/ressource_names"

import "./index.css"
import genericComponents from "../generic";

const SignInFormView = ({
  loginFormLogin,
  loginFormPassword,
  onInputChange,
  onSubmit
}) => {
  return (
    <Form onSubmit={onSubmit} className="logIn-form">
      <genericComponents.Input
        onChange={onInputChange}
        state={loginFormLogin}
        name={RESSOURCE_NAMES.LOG_IN_FORM.LOGIN}
        placeholder="Login"
        label="Login"
      />
      <genericComponents.Input
        onChange={onInputChange}
        state={loginFormPassword}
        name={RESSOURCE_NAMES.LOG_IN_FORM.PASSWORD}
        type="password"
        placeholder="Mot de passe"
        label="Mot de passe"
      />

      <Form.Button className="submit-button-container" type="submit">Connexion</Form.Button>
    </Form>
  )
}

export default SignInFormView
