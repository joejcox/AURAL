import Container from "core/Container"
import { FunctionComponent, ReactNode } from "react"

type AccountContainerProps = {
  children: ReactNode
}

const AccountContainer: FunctionComponent<AccountContainerProps> = ({
  children,
}) => (
  <Container>
    <div className="flex flex-wrap">{children}</div>
  </Container>
)

export default AccountContainer
