import { useRef, useEffect } from "react"
import MobileMenuLink from "components/MobileMenu/MobileMenuLink"
import logoWhite from "assets/images/logo-white.png"
import { Link } from "react-router-dom"

const MobileMenu = ({ toggleOpen, isOpen }) => {
  const menuRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return null

    const handleOutOfBoundsClick = (e) => {
      if (e.target !== menuRef.current) {
        toggleOpen()
      }
    }

    document.addEventListener("mousedown", handleOutOfBoundsClick)

    return () =>
      document.removeEventListener("mousedown", handleOutOfBoundsClick)
  }, [isOpen, toggleOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        className="h-full fixed top-0 right-0 max-w-full z-500 w-72 md:w-2/4 lg:hidden bg-black shadow flex flex-col items-center justify-center"
        ref={menuRef}
      >
        <Link to="/" className="mb-12">
          <img src={logoWhite} alt="Aural Logo White" width="150" />
        </Link>
        <MobileMenuLink path="/">Home</MobileMenuLink>
        <MobileMenuLink path="/">Shop</MobileMenuLink>
      </div>
      <div className="flex justify-end cursor-pointer overflow-hidden lg:hidden absolute top-0 left-0 right-0 bottom-0 z-200 bg-black bg-opacity-75"></div>
    </>
  )
}

export default MobileMenu
