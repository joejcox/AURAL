import { useSelector } from "react-redux"
import { selectUser } from "features/user/userSlice"

const useAuth = () => {
  const { user, error } = useSelector(selectUser)

  return { user, error }
}

export default useAuth
