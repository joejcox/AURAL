import { Link } from "react-router-dom"

const ButtonLink = ({ children, path }) => (
  <Link
    to={path}
    className="bg-main-400 px-6 py-3 text-white hover:bg-black font-primary font-extrabold uppercase text-lg"
  >
    {children}
  </Link>
)

export default ButtonLink
