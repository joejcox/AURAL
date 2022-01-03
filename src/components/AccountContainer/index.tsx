import AccountContent from "components/AccountContent"
import AccountSidebar from "components/AccountSidebar"
import Container from "core/Container"
import { FunctionComponent, ReactNode } from "react"

type AccountContainerProps = {
  children: ReactNode
}

const AccountContainer: FunctionComponent<AccountContainerProps> = ({
  children,
}) => (
  <Container>
    <div className="flex flex-wrap items-start">
      <AccountContent>{children}</AccountContent>
      <AccountSidebar />
    </div>
  </Container>
)

export default AccountContainer
