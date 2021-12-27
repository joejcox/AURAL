import Container from "core/Container"

const ProductGridContainer = ({ children }) => (
  <Container classes="flex flex-wrap border-b border-gray-200 pb-8">
    {children}
  </Container>
)

export default ProductGridContainer
