import Container from "core/Container"
import { FunctionComponent, ReactNode } from "react"

const ProductGridContainer: FunctionComponent<ReactNode> = ({ children }) => (
  <Container classes="flex flex-wrap border-b border-gray-200 pb-8">
    {children}
  </Container>
)

export default ProductGridContainer
