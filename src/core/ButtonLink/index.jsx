import { Link } from "react-router-dom"

const ButtonLink = ({ children, path, classes }) => (
  <Link
    to={path}
    className={`bg-main-400 px-6 py-3 text-white hover:bg-black font-primary font-extrabold uppercase text-lg"
${classes ? classes : ""}`}
  >
    {children}
  </Link>
)

export default ButtonLink
