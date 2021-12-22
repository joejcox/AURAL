import ButtonLink from "core/ButtonLink"
import NavbarLink from "core/Layout/Header/Navbar/NavbarLink"
import { Link } from "react-router-dom"
import { ShoppingBagIcon, SearchIcon } from "@heroicons/react/solid"
import MobileMenu from "components/MobileMenu"
import MobileMenuHamburger from "components/MobileMenu/MobileMenuHamburger"

const Navbar = () => {
  return (
    <>
      <nav className="hidden lg:block ml-6" role="navigation">
        <NavbarLink path="/">Home</NavbarLink>
        <NavbarLink path="/">Shop</NavbarLink>
      </nav>
      <div className="ml-auto flex items-center">
        <div className="hidden lg:inline-block">
          <ButtonLink path="/">Sign Up</ButtonLink>
        </div>
        <div className="lg:ml-6 flex items-center">
          <button>
            <SearchIcon className="w-6" />
          </button>
          <Link to="/" className="ml-3">
            <ShoppingBagIcon className="w-6" />
          </Link>
          <MobileMenuHamburger />
        </div>
      </div>
      <MobileMenu />
    </>
  )
}

export default Navbar