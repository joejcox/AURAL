import { useSelector } from "react-redux"
import { selectUser } from "features/user/userSlice"
import { signOut, signInWithEmailAndPassword } from "firebase/auth"
import auth from "services/firebase"
import { useNavigate } from "react-router-dom"

const useAuth = () => {
  const navigate = useNavigate()
  const { user, authError } = useSelector(selectUser)

  const signin = async (data) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      return response.user
    } catch (error) {
      return { error: error }
    }
  }

  const signout = () => {
    signOut(auth)
      .then(() => {
        navigate("/sign-in")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return { user, authError, signout, signin }
}

export default useAuth
