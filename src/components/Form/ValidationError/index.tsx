import { FunctionComponent, ReactNode } from "react"

const ValidationError: FunctionComponent<ReactNode> = ({ children }) => (
  <span className="block text-red-500 text-xs pl-2 mt-2">{children}</span>
)

export default ValidationError
