import Container from "core/Container"
import Logo from "core/Logo"
import Navbar from "core/Layout/Header/Navbar"
import { FunctionComponent } from "react"

const Header: FunctionComponent = () => (
  <header className="bg-white shadow-sm h-24 flex items-center">
    <Container classes="flex items-center">
      <Logo />
      <Navbar />
    </Container>
  </header>
)

export default Header
