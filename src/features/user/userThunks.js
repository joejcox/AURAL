import auth from "services/firebase"
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const handleSignIn = createAsyncThunk("user/signIn", async (data) => {
  setPersistence(auth, browserSessionPersistence)
    .then(async () => {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        )
        return response.user
      } catch (error) {
        let message = null

        if (error.code === "auth/too-many-requests") {
          message =
            "Too many unsuccessful attempts, please reset password or try again later"
        }

        if (error.code === "auth/wrong-password") {
          message = "Incorrect password, please try again"
        }

        if (error.code === "auth/user-not-found") {
          message = "User does not exist, please try again"
        }

        return { error: message }
      }
    })
    .catch((error) => {
      return { error: error.message }
    })
})
