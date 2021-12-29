import SignInForm from "components/SignInForm"
import { Navigate } from "react-router-dom"
import useAuth from "hooks/useAuth"
import { Helmet } from "react-helmet-async"

const SignIn = () => {
  const { user } = useAuth()

  return user ? (
    <Navigate to="/" />
  ) : (
    <SignInForm>
      <Helmet>
        <title>Sign In | Aural Records</title>
      </Helmet>
      <h1 className="text-3xl mb-6 font-secondary">Sign In</h1>
    </SignInForm>
  )
}

export default SignIn
