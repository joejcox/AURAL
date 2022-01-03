import Container from "core/Container"
import { FunctionComponent, ReactNode } from "react"

const PageTitle: FunctionComponent<ReactNode> = ({ children }) => (
  <div className="bg-gray-100 py-16 mb-16">
    <Container>
      <h1 className="text-3xl text-center uppercase font-extrabold">
        {children}
      </h1>
    </Container>
  </div>
)

export default PageTitle
