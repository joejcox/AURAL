import { FunctionComponent, ReactNode } from "react"

const Section: FunctionComponent<ReactNode> = ({ children }) => (
  <section className="py-16">{children}</section>
)

export default Section
