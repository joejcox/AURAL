import AccountContainer from "components/AccountContainer"
import AccountSidebar from "components/AccountSidebar"
import PageTitle from "core/PageTitle"

const AccountSettings = () => {
  return (
    <section>
      <PageTitle>Account Settings</PageTitle>
      <AccountContainer>
        <AccountSidebar />
      </AccountContainer>
    </section>
  )
}

export default AccountSettings
