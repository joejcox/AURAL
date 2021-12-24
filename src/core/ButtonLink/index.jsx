import { Link } from "react-router-dom"

const ButtonLink = ({ children, path, classes }) => (
  <Link
    to={path}
    className={` px-6 py-3 text-white font-primary font-extrabold uppercase text-lg"
${classes ? classes : "bg-main-400 hover:bg-black"}`}
  >
    {children}
  </Link>
)

export default ButtonLink
