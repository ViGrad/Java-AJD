import React from "react"
import { connect } from "react-redux"
import View from "./view"
import { updateInputValue } from "../../core/actions/sign-in-form"
import { fetchAccounts, createAccount } from "../../core/actions/accounts";
import { getAccounts, getAccountsIsLoading } from "../../core/reducers/accounts";
import { getAccountFormState } from "../../core/reducers/add-account-form";

class AccountsPageComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount() {
    this.props.init()
  }

  handleInputChange(event, data) {
    this.props.onInputChange({value: data.value, ressourceName: data.name})
  }
  

  
  render() {
    return <View {...this.props} onInputChange={this.handleInputChange} />
  }
}

const mapStateToProps = (state) => ({
  accounts: getAccounts(state),
  isLoading: getAccountsIsLoading(state),
  addAccountFormState: getAccountFormState(state),
})

const mapDispatchToProps = ({
  init: fetchAccounts,
  onInputChange: updateInputValue,
  onSubmitAddAccountForm: createAccount
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPageComponent)
