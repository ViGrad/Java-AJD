import React from "react"
import { connect } from "react-redux"
import View from "./view"
import { updateInputValue } from "../../../core/actions/sign-in-form"
import { fetchAccounts, createAccount } from "..././../core/actions/accounts";
import { getAccounts, getAccountsIsLoading } from "../../../core/reducers/accounts";
import { getAccountFormState } from "../../../core/reducers/add-account-form";

class AccountsPageComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount() {
    this.props.init()
  }

  render() {
    return <View {...this.props}  />
  }
}

const mapStateToProps = (state) => ({
  accounts: getAccounts(state),
  isLoading: getAccountsIsLoading(state),
})

const mapDispatchToProps = ({
  init: fetchAccounts,
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPageComponent)
