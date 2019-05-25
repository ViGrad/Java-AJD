import React from "react"
import { connect } from "react-redux"
import View from "./view"
import { updateInputValue } from "../../../core/actions/sign-in-form"
import { getAccounts, getAccountsIsLoading, getSelectedAccount } from "../../../core/reducers/accounts";
import { RESSOURCE_NAMES } from "../../../core/reducers/ressource_names";
import { fetchAccounts } from "../../../core/actions/accounts";

class AccountsPageComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelectAccount = this.handleSelectAccount.bind(this)
  }

  handleSelectAccount(value) {
    this.props.onUpdate({value, ressourceName: RESSOURCE_NAMES.ACCOUNTS.SELECTED})
  }

  componentWillMount() {
    this.props.init()
  }

  render() {
    return <View {...this.props} onSelectAccount={this.handleSelectAccount} />
  }
}

const mapStateToProps = (state) => ({
  accounts: getAccounts(state),
  isLoading: getAccountsIsLoading(state),
  selected: getSelectedAccount(state)
})

const mapDispatchToProps = ({
  init: fetchAccounts,
  onUpdate: updateInputValue
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPageComponent)
