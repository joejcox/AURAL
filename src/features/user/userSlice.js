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
      state.error = action.payload
    },
  },
})

export const { setUser, setError } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer
