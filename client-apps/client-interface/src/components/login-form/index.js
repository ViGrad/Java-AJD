import React from "react"
import { connect } from "react-redux"
import View from "./view"
import { logIn } from "../../actions/user-context"
import { getLoginFormInputValues } from "../../reducers/login-form";
import { updateLoginForm } from "../../actions/login-form/form-updaters";

class LoginFormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event, data) {
    console.log("event", event)
    console.log("data", data)
    this.props.onInputChange({value: data.value, ressourceName: data.name})
  }
  
  render() {
    return <View {...this.props}  onInputChange={this.handleInputChange}  />
  }
}

const mapStateToProps = (state) => getLoginFormInputValues(state)

const mapDispatchToProps = {
  onLogIn: logIn,
  onInputChange: updateLoginForm
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent)