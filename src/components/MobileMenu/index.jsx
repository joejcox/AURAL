import { useContext, useRef } from "react"
import { MenuContext } from "context/MenuContext"
import MobileMenuPortal from "portals/MobileMenuPortal"
import MobileMenuLink from "components/MobileMenu/MobileMenuLink"
import logoWhite from "assets/images/logo-white.png"
import { Link } from "react-router-dom"

const MobileMenu = () => {
  const menuRef = useRef(null)
  const { menuIsOpen, closeMenu } = useContext(MenuContext)

  if (!menuIsOpen) return null

  return (
    <MobileMenuPortal>
      <div className="h-full fixed top-0 right-0 max-w-full z-30 w-72 md:w-2/4 lg:hidden bg-black shadow flex flex-col items-center justify-center">
        <Link to="/" className="mb-12" onClick={closeMenu}>
          <img src={logoWhite} alt="Aural Logo White" width="150" />
        </Link>
        <MobileMenuLink path="/">Home</MobileMenuLink>
        <MobileMenuLink path="/">Shop</MobileMenuLink>
      </div>
      <div
        className="flex justify-end cursor-pointer overflow-hidden lg:hidden absolute top-0 left-0 right-0 bottom-0 z-20 bg-black bg-opacity-75"
        ref={menuRef}
        onClick={closeMenu}
      ></div>
    </MobileMenuPortal>
  )
}

export default MobileMenu
