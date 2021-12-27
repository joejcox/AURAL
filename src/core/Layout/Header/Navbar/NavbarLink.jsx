import usePreviousPathname from "hooks/usePreviousPathname"
import { Link } from "react-router-dom"

const NavbarLink = ({ children, path }) => {
  const { currentPath } = usePreviousPathname()

  return (
    <Link
      to={path}
      state={{ from: currentPath }}
      className="px-6 py-3 w-full text-center lg:w-auto text-gray-800 hover:text-gray-50 text-lg inline-block uppercase font-extrabold font-primary hover:bg-gray-900"
    >
      {children}
    </Link>
  )
}

export default NavbarLink
