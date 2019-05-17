import React from "react"

import { Button } from "semantic-ui-react"
import LoginPage from "./login-page"
import { logOut } from "../actions"
import { connect } from "react-redux"
import { getIsLogged } from "../reducers/user-context"

const App = ({ isLogged, logOut }) =>
  isLogged ? (
    <div>
      <p>Vous êtes connecté</p>
      <Button onClick={logOut}>Déconnexion</Button>
    </div>
  ) : (
    <LoginPage />
  )

const mapStateToProps = state => ({
  isLogged: getIsLogged(state)
})

const mapDispatchToProps = {
  logOut
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
