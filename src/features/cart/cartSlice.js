import { createSlice } from "@reduxjs/toolkit"

const localCartItems = JSON.parse(localStorage.getItem("cartItems"))

const initialState = {
  cartItems: localCartItems || [],
  cartTotal: 0.0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cartItems = payload
    },
    addToCart: (state, { payload }) => {
      const product = { ...payload, quantity: 1 }
      const price = Number(product.price.vinyl)

      const item = state.cartItems.find((item) => item.id === product.id)

      state.cartTotal += price

      if (item) {
        item.quantity += 1
      } else {
        state.cartItems.push(product)
      }
    },
    removeFromCart: (state, { payload }) => {
      const price = Number(payload.price.vinyl)
      state.cartTotal -= price
      state.cartItems = state.cartItems.filter((data) => data.id !== payload.id)
    },
    increaseQuantity: (state, { payload }) => {
      const product = state.cartItems.find((item) => item.id === payload.id)
      product.quantity += 1
    },
    decreaseQuantity: (state, { payload }) => {
      const product = state.cartItems.find((item) => item.id === payload.id)
      if (product.quantity === 1) {
        return (state.cartItems = state.cartItems.filter(
          (data) => data.id !== payload.id
        ))
      }
      product.quantity -= 1
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions

export const selectCart = (state) => state.cart

export default cartSlice.reducer
