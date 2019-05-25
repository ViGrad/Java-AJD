import React from "react"

import { Button } from "semantic-ui-react"
import SignInPage from "./sign-in-form"
import LoginPage from "./log-in-form"
import AccountsPage from "./accounts-page"
import { logOut } from "../core/actions"
import { connect } from "react-redux"
import { getIsLogged } from "../core/reducers/user-context"

import "./app.css"

const App = ({ isLogged, logOut }) =>
  isLogged ? (
    <div>
      <AccountsPage/>
      <Button onClick={logOut}>Déconnexion</Button>
    </div>
  ) : (
    <div>
      <SignInPage />
      <LoginPage />
    </div>
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
