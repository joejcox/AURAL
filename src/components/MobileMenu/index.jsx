import { useRef, useEffect } from "react"
import MobileMenuLink from "components/MobileMenu/MobileMenuLink"
import logoWhite from "assets/images/logo-white.png"
import { Link } from "react-router-dom"
import useAuth from "features/user/useAuth"

const MobileMenu = ({ toggleOpen, isOpen }) => {
  const { user, signout } = useAuth()
  const menuRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return null

    const handleOutOfBoundsClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        toggleOpen()
      }
    }

    document.addEventListener("mousedown", handleOutOfBoundsClick)

    return () => {
      document.removeEventListener("mousedown", handleOutOfBoundsClick)
    }
  }, [isOpen, toggleOpen])

  const menuToggleClasses = isOpen ? "open" : "test"

  return (
    <>
      <div
        className={`mobile-menu ${menuToggleClasses} h-full fixed top-0 right-0 z-500 w-72 md:w-2/4 lg:hidden bg-black shadow flex flex-col items-center justify-center`}
        ref={menuRef}
      >
        <Link to="/" className="mb-12" onClick={toggleOpen}>
          <img src={logoWhite} alt="Aural Logo White" width="150" />
        </Link>
        <MobileMenuLink onClick={toggleOpen} path="/">
          Home
        </MobileMenuLink>

        <MobileMenuLink onClick={toggleOpen} path="/shop">
          Shop
        </MobileMenuLink>

        <MobileMenuLink onClick={toggleOpen} path="/shop/vinyl">
          Vinyl
        </MobileMenuLink>

        <div onClick={toggleOpen}>
          {user ? (
            <button
              className="px-6 py-3 w-full text-center lg:w-auto text-gray-50 hover:text-white text-lg inline-block uppercase font-extrabold font-primary"
              onClick={signout}
            >
              Sign Out
            </button>
          ) : (
            <MobileMenuLink path="/sign-in">Sign In</MobileMenuLink>
          )}
        </div>
      </div>
      <div
        className={`mobile-menu-overlay ${menuToggleClasses} flex justify-end cursor-pointer lg:hidden absolute top-0 left-0 right-0 bottom-0 z-200 bg-black bg-opacity-75`}
      ></div>
    </>
  )
}

export default MobileMenu
