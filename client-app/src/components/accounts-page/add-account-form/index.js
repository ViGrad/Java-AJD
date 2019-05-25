import React from "react"
import { connect } from "react-redux"
import View from "./view"
import { updateInputValue } from "../../../core/actions/sign-in-form"
import { fetchAccounts, createAccount } from "../../../core/actions/accounts";
import { getAccounts, getAccountsIsLoading } from "../../../core/reducers/accounts";
import { getAccountFormState } from "../../../core/reducers/add-account-form";

class AddAccountFormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event, data) {
    this.props.onChange({value: data.value, ressourceName: data.name})
  }
  

  
  render() {
    return <View {...this.props} onChange={this.handleInputChange} />
  }
}

const mapStateToProps = (state) => ({
  state: getAccountFormState(state),
})

const mapDispatchToProps = ({
  onChange: updateInputValue,
  onSubmit: createAccount
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAccountFormComponent)
