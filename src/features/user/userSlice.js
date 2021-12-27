import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setError: (state, action) => {
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

      state.error = message
    },
  },
})

export const { setUser, setError } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer
