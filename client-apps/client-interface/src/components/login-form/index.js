import React from "react"
import { connect } from "react-redux"
import View from "./view"
import { getLoginFormInputValues } from "../../core/reducers/login-form"
import { updateLoginForm, trySendLoginForm } from "../../core/actions/login-form"

class LoginFormComponent extends React.Component {
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

const mapStateToProps = (state) => getLoginFormInputValues(state)

const mapDispatchToProps = {
  onSubmit: trySendLoginForm,
  onInputChange: updateLoginForm
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent)
