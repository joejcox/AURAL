import PageTitle from "core/PageTitle"
import useAuth from "features/user/useAuth"
import AccountSidebar from "components/AccountSidebar"
import AccountContainer from "components/AccountContainer"
import AccountContent from "components/AccountContent"
import { FunctionComponent } from "react"

const Account: FunctionComponent = () => {
  const { user } = useAuth()

  if (!user) return null

  return (
    <section>
      <PageTitle>Your Account</PageTitle>
      <AccountContainer>
        <AccountSidebar />
        <AccountContent>
          <h2 className="text-2xl inline-block text-gray-800 font-primary border-b border-gray-300 mb-4">
            User Info
          </h2>
          <p>
            <b>Email:</b> {user.email.toLowerCase()}
          </p>
          <p>
            <b>Name:</b> {user.name}
          </p>
        </AccountContent>
      </AccountContainer>
    </section>
  )
}

export default Account
