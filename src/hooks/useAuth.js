import { useSelector } from "react-redux"
import { selectUser } from "features/user/userSlice"
import { signOut, signInWithEmailAndPassword } from "firebase/auth"
import auth from "services/firebase"

const useAuth = () => {
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

  const signout = async () => {
    try {
      const response = await signOut(auth)
      return response
    } catch (error) {
      return error.code
    }
  }

  return { user, authError, signout, signin }
}

export default useAuth
