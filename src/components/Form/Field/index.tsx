import { FunctionComponent, ReactNode } from "react"

const Field: FunctionComponent<ReactNode> = ({ children }) => (
  <div className="mb-4">{children}</div>
)

export default Field
