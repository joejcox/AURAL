import { useDispatch } from "react-redux"
import auth from "services/firebase"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { removeUser } from "./userSlice"

const useAuth = () => {
  const dispatch = useDispatch()

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    await signOut(auth)
    dispatch(removeUser())
  }

  return { signIn, logout }
}

export default useAuth
