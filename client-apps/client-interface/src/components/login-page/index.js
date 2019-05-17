import { connect } from "react-redux"
import View from "./view"
import { logIn } from "../../actions/user-context"

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  logIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
