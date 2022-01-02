import Container from "core/Container"

const AccountContainer = ({ children }) => (
  <Container>
    <div className="flex flex-wrap">{children}</div>
  </Container>
)

export default AccountContainer
