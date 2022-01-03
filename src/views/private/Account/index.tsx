import PageTitle from "core/PageTitle"
import useAuth from "features/user/useAuth"
import AccountContainer from "components/AccountContainer"
import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import AccountSection from "components/AccountSection"

const Account: FunctionComponent = () => {
  const { user } = useAuth()

  if (!user) return null

  return (
    <section>
      <PageTitle>
        <span className="text-left w-full block font-normal normal-case">
          Your Account
        </span>
      </PageTitle>
      <AccountContainer>
        <AccountSection>
          <h2 className="text-2xl inline-block text-gray-800 font-primary border-b border-gray-300 mb-4">
            User Info
          </h2>
          <p>
            <b>Email:</b> {user.email.toLowerCase()}
          </p>
          <p>
            <b>Name:</b> {user.name}
          </p>
        </AccountSection>
        <AccountSection>
          <h2 className="text-2xl inline-block text-gray-800 font-primary border-b border-gray-300 mb-4">
            Address
          </h2>
          {user.address ? (
            <>
              <p>{user.address.first_line}</p>
              {user.address.second_line && <p>{user.address.second_line}</p>}
              {user.address.third_line && <p>{user.address.third_line}</p>}
              <p>{user.address.country}</p>
              <p>{user.address.postcode}</p>
            </>
          ) : (
            <p>
              No details found.{" "}
              <Link to="/" className="text-main-400 hover:underline">
                Add them now?
              </Link>
            </p>
          )}
        </AccountSection>
      </AccountContainer>
    </section>
  )
}

export default Account
