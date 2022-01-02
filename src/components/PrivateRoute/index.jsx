import { Outlet, Navigate } from "react-router-dom"
import useAuth from "features/user/useAuth"

const PrivateRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return null

  return user ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute
