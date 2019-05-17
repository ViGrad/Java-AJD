import { connect } from "react-redux"
import View from "./view"
import { getIsLogged } from "../../reducers/user-context"
import { logIn, logOut } from "../../actions/user-context"

const mapStateToProps = (state) => {
  console.log(state, getIsLogged(state))
  return {
    isLogged: getIsLogged(state)
  }
}

const mapDispatchToProps = {
  logIn,
  logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
