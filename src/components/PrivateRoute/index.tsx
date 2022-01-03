import { Outlet, Navigate } from "react-router-dom"
import useAuth from "features/user/useAuth"
import { FunctionComponent } from "react"

const PrivateRoute: FunctionComponent = () => {
  const { user, loading } = useAuth()

  if (loading) return null

  return user ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute
