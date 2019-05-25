import React from "react"
import { connect } from "react-redux"
import View from "./view"
import { updateInputValue, trySendSignInForm } from "../../core/actions/sign-in-form"
import { getLogInFormInputState } from "../../core/reducers/log-in-form";
import { sendLoginForm } from "../../core/actions/log-in-form";

class SignInFormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event, data) {
    this.props.onInputChange({value: data.value, ressourceName: data.name})
  }
  
  render() {
    return <View {...this.props}  onInputChange={this.handleInputChange}  />
  }
}

const mapStateToProps = (state) => getLogInFormInputState(state)

const mapDispatchToProps = {
  onSubmit: sendLoginForm,
  onInputChange: updateInputValue
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormComponent)
