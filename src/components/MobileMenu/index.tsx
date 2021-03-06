import { useRef, useEffect, useContext, FunctionComponent } from "react"
import MobileMenuLink from "components/MobileMenu/MobileMenuLink"
import logoWhite from "assets/images/logo-white.png"
import { Link } from "react-router-dom"
import useAuth from "features/user/useAuth"
import { MobileMenuContext } from "context/MobileMenuContext"

const MobileMenu: FunctionComponent = () => {
  // context passed to entire navbar to toggle mobile menu open and get its open state
  const { isOpen, toggleOpen } = useContext(MobileMenuContext)

  // user data used to conditionally render sign out button and pass signout function to it
  const { user, signout } = useAuth()

  // ref for the mobile menu container so we can handle clicks outside of it in useEffect
  const menuRef = useRef(null)

  useEffect(() => {
    // if the mobile menu is not open, we do not want to do anything
    if (!isOpen) return null

    const handleOutOfBoundsClick = (e: Event) => {
      // if the menu is open and the user doesn't click inside the menu container we want to toggle it closed
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        toggleOpen()
      }
    }

    document.addEventListener("mousedown", handleOutOfBoundsClick)

    return () => {
      document.removeEventListener("mousedown", handleOutOfBoundsClick)
    }
  }, [isOpen, toggleOpen])

  // if menu is open, pass it the 'open' class
  const menuToggleClasses = isOpen ? "open" : ""

  return (
    <>
      <div
        className={`mobile-menu ${menuToggleClasses} h-full fixed top-0 right-0 z-500 w-72 md:w-2/4 lg:hidden bg-black shadow flex flex-col items-center justify-center`}
        ref={menuRef}
      >
        <Link to="/" className="mb-12" onClick={toggleOpen}>
          <img src={logoWhite} alt="Aural Logo White" width="150" />
        </Link>
        <MobileMenuLink path="/">Home</MobileMenuLink>
        <MobileMenuLink path="/shop">Shop</MobileMenuLink>
        <MobileMenuLink path="/shop/vinyl">Vinyl</MobileMenuLink>

        {user ? (
          <button
            className="px-6 py-3 w-full text-center lg:w-auto text-gray-50 hover:text-white text-lg inline-block uppercase font-extrabold font-primary"
            onClick={() => {
              signout()
              toggleOpen()
            }}
          >
            Sign Out
          </button>
        ) : (
          <MobileMenuLink path="/sign-in">Sign In</MobileMenuLink>
        )}
      </div>
      <div
        className={`mobile-menu-overlay ${menuToggleClasses} flex justify-end cursor-pointer lg:hidden absolute top-0 left-0 right-0 bottom-0 z-200 bg-black bg-opacity-75`}
      ></div>
    </>
  )
}

export default MobileMenu
