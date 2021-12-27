import { useSelector } from "react-redux"
import { selectUser } from "features/user/userSlice"
import { signOut } from "firebase/auth"
import auth from "services/firebase"
import { useNavigate } from "react-router-dom"

const useAuth = () => {
  const navigate = useNavigate()
  const { user, error } = useSelector(selectUser)

  const signout = () => {
    signOut(auth)
      .then(() => {
        navigate("/sign-in")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return { user, error, signout }
}

export default useAuth
