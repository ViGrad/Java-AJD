import React from "react"
import { connect } from "react-redux"
import View from "./view"
import { updateInputValue } from "../../../core/actions/sign-in-form"
import { getAccounts, getAccountsIsLoading, getSelectedAccount } from "../../../core/reducers/accounts";
import { RESSOURCE_NAMES } from "../../../core/reducers/ressource_names";
import { fetchAccounts, makeTransfer } from "../../../core/actions";
import { getTransferFormState } from "../../../core/reducers/forms/transfer-form";

class AccountsPageComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelectAccount = this.handleSelectAccount.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSelectAccount(value) {
    this.props.onUpdate({value, ressourceName: RESSOURCE_NAMES.ACCOUNTS.SELECTED})
  }

  handleInputChange(event, data) {
    this.props.onUpdate({value: data.value, ressourceName: data.name})
  }

  componentWillMount() {
    this.props.init()
  }

  render() {
    return <View {...this.props} onInputChange={this.handleInputChange} onSelectAccount={this.handleSelectAccount} />
  }
}

const mapStateToProps = (state) => ({
  accounts: getAccounts(state),
  isLoading: getAccountsIsLoading(state),
  selected: getSelectedAccount(state),
  transferFormState: getTransferFormState(state),
})

const mapDispatchToProps = ({
  init: fetchAccounts,
  onUpdate: updateInputValue,
  onSubmitTransferForm: makeTransfer
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPageComponent)
