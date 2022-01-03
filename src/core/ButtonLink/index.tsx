import { FunctionComponent, ReactNode } from "react"
import { Link } from "react-router-dom"

interface ButtonLinkProps {
  children: ReactNode
  path: string
  classes?: string
}

// main component to use for links to routes which need to look like primary buttons
const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  children,
  path,
  classes,
}) => (
  <Link
    to={path}
    className={` px-6 py-3 text-white font-primary font-extrabold uppercase text-lg"
${classes ? classes : "bg-main-400 hover:bg-black"}`}
  >
    {children}
  </Link>
)

export default ButtonLink
