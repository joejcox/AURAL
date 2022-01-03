import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
  user: object | null
  authError: string | null
  loading: boolean
}

type ErrorPayload = {
  payload: string
}

const initialState: InitialState = {
  user: null,
  authError: null,
  loading: true,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.authError = null
      state.loading = false
    },
    setError: (state, action: ErrorPayload) => {
      const errorCode = action.payload
      let message = errorCode

      if (errorCode === "auth/too-many-requests") {
        message =
          "Too many unsuccessful attempts, please reset password or try again later"
      }

      if (errorCode === "auth/wrong-password") {
        message = "Incorrect password, please try again"
      }

      if (errorCode === "auth/user-not-found") {
        message = "User does not exist, please try again"
      }

      if (errorCode === "auth/email-already-in-use") {
        message = "Email already exists, please use another email"
      }

      state.authError = message
    },
  },
})

export const { setUser, setError } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer
