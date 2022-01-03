import { useSelector } from "react-redux"
import { selectUser } from "features/user/userSlice"
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import auth, { addUserToFirestore } from "services/firebase"

interface FormData {
  email: string
  password: string
  name?: string
  error?: Error
}

const useAuth = () => {
  const { user, authError, loading } = useSelector(selectUser)

  // Sign in with Firebase auth. Auth listener in app.jsx will set redux state with response.user
  // app.jsx state update will also get user from firestore based on uid and add to state along with response
  const signin = async (data: FormData) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      return response.user
    } catch (error) {
      return error
    }
  }

  // Sign out with Firebase auth. Auth listener in app.jsx will update state and set user to null
  const signout = async () => {
    try {
      const response = await signOut(auth)
      return response
    } catch (error) {
      return error.code
    }
  }

  // creates an account with firebase auth.
  // should pull addUser function from useFirebase hook to add to firestore
  // app.jsx auth listener should pull the firestore user data and set redux user state in userSlice
  const createAccount = async (data: FormData) => {
    try {
      const authResponse = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      if (authResponse.user) {
        const uid = authResponse.user.uid
        const firestoreResponse = await addUserToFirestore(
          uid,
          data.name,
          data.email
        )
        return { status: 200, data: firestoreResponse }
      }

      return authResponse.user
    } catch (error) {
      return error
    }
  }

  return { user, authError, loading, signout, signin, createAccount }
}

export default useAuth
