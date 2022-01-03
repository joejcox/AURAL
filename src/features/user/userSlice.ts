import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
  email: string
  name: string
  uid: string
}
interface InitialState {
  user: User | null
  authError: string | null
  loading: boolean
}

type ErrorPayload = {
  payload: string
}

interface UserState {
  user: InitialState
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
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload
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

export const selectUser = (state: UserState) => state.user

export default userSlice.reducer
