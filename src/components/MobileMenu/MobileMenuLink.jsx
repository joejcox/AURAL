import { Link } from "react-router-dom"
import { useContext } from "react"
import { MobileMenuContext } from "context/MobileMenuContext"

// individual links used within mobile menu only. Should toggle menu closed when clicked
const MobileMenuLink = ({ children, path, onClick }) => {
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
