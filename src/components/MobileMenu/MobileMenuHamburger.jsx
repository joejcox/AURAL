import { useContext } from "react"
import { MenuContext } from "context/MenuContext"
import { MenuAlt4Icon, XIcon } from "@heroicons/react/solid"

const MobileMenuHamburger = () => {
  const { menuIsOpen, openMenu, closeMenu } = useContext(MenuContext)

  const handleMenuToggle = () => {
    menuIsOpen ? closeMenu() : openMenu()
  }

  return (
    <span
      className={`cursor-pointer z-999 ml-3 inline-block lg:hidden ${
        menuIsOpen ? "text-white" : "text-gray-800"
      }`}
      onClick={handleMenuToggle}
    >
      {menuIsOpen ? (
        <XIcon className="text-white w-8" />
      ) : (
        <MenuAlt4Icon className="text-gray-800 w-8" />
      )}
    </span>
  )
}

export default MobileMenuHamburger
