import { Link } from "react-router-dom"
import logo from "assets/images/logo.png"
import { FunctionComponent } from "react"

const Logo: FunctionComponent = () => (
  <Link to="/">
    <img src={logo} alt="Aural Logo" width="100" />
  </Link>
)

export default Logo
