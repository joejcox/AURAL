import SignInForm from "components/Form/SignInForm"
import { Navigate, Link } from "react-router-dom"
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
      <h1 className="text-3xl font-secondary">Sign In</h1>
      <p className="mb-6 text-gray-600">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-main-400">
          Create Account
        </Link>
      </p>
    </SignInForm>
  )
}

export default SignIn
