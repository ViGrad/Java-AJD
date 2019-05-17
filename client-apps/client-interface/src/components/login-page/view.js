import React from "react"
import { Button } from 'semantic-ui-react'

const LoginPageView = ({isLogged, logIn, logOut}) => {
  const text = isLogged ? "Log Out" : "Log In"
  const onClick = isLogged ? logOut : logIn
  return <Button onClick={onClick}>{text}</Button>
}

export default LoginPageView