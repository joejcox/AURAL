import { Link } from "react-router-dom"
import { FunctionComponent, ReactNode, useContext } from "react"
import { MobileMenuContext } from "context/MobileMenuContext"

interface MobileMenuLinkProps {
  children: ReactNode
  path: string
}

// individual links used within mobile menu only. Should toggle menu closed when clicked
const MobileMenuLink: FunctionComponent<MobileMenuLinkProps> = ({
  children,
  path,
}) => {
  const { toggleOpen } = useContext(MobileMenuContext)

  return (
    <div onClick={toggleOpen}>
      <Link
        to={path}
        className="px-6 py-3 w-full text-center lg:w-auto text-gray-50 hover:text-white text-lg inline-block uppercase font-extrabold font-primary"
      >
        {children}
      </Link>
    </div>
  )
}

export default MobileMenuLink
