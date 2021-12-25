import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  uid: null,
  email: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid
      state.email = action.payload.email
    },
    removeUser: (state) => {
      state.uid = null
      state.email = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer
