import React from "react"
import { connect } from "react-redux"
import View from "./view"
import { getSignInFormInputValues, getSignInFormInputState } from "../../core/reducers/sign-in-form"
import { updateSignInForm, trySendSignInForm } from "../../core/actions/sign-in-form"

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

const mapStateToProps = (state) => getSignInFormInputState(state)

const mapDispatchToProps = {
  onSubmit: trySendSignInForm,
  onInputChange: updateSignInForm
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormComponent)
