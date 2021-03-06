import { MenuAlt4Icon, XIcon } from "@heroicons/react/solid"
import { FunctionComponent, useContext } from "react"
import { MobileMenuContext } from "context/MobileMenuContext"

const MobileMenuHamburger: FunctionComponent = () => {
  // get menu state from context and pass toggle function to hamburger
  const { isOpen, toggleOpen } = useContext(MobileMenuContext)

  return (
    <span
      className={`cursor-pointer z-999 ml-3 inline-block lg:hidden ${
        isOpen ? "text-white" : "text-gray-800"
      }`}
      onClick={toggleOpen}
    >
      {isOpen ? (
        <XIcon className="text-white w-8" />
      ) : (
        <MenuAlt4Icon className="text-gray-800 w-8" />
      )}
    </span>
  )
}

export default MobileMenuHamburger
