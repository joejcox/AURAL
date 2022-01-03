import AccountContainer from "components/AccountContainer"
import PageTitle from "core/PageTitle"
import { FunctionComponent } from "react"

const Settings: FunctionComponent = () => (
  <section>
    <PageTitle>
      <span className="text-left w-full block font-normal normal-case">
        Settings
      </span>
    </PageTitle>
    <AccountContainer>
      <p>Settings</p>
    </AccountContainer>
  </section>
)

export default Settings
