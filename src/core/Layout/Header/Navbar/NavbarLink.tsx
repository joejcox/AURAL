import { FunctionComponent, ReactNode } from "react"
import { Link } from "react-router-dom"

interface NavbarLinkProps {
  children: ReactNode
  path: string
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ children, path }) => (
  <Link
    to={path}
    className="px-6 py-3 w-full text-center lg:w-auto text-gray-800 border-l border-gray-200 hover:text-gray-50 text-lg inline-block uppercase font-extrabold font-primary hover:bg-gray-900"
  >
    {children}
  </Link>
)

export default NavbarLink
