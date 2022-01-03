import { FunctionComponent, ReactNode } from "react"

const AccountSection: FunctionComponent<ReactNode> = ({ children }) => (
  <div className="mb-8">{children}</div>
)

export default AccountSection
