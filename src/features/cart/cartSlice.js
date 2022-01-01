import { createSlice } from "@reduxjs/toolkit"

const localCartItems = JSON.parse(localStorage.getItem("cartItems"))

const initialState = {
  cartItems: localCartItems || [],
  cartTotal: 0.0,
  cartQuantity: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const product = { ...payload, quantity: 1 }
      const price = Number(payload.price.vinyl)
      const item = state.cartItems.find((item) => item.docId === payload.docId)

      state.cartTotal += price
      state.cartQuantity += 1

      if (item) {
        item.quantity += 1
      } else {
        state.cartItems.push(product)
      }
    },
    removeFromCart: (state, { payload }) => {
      const product = state.cartItems.find((item) => item.docId === payload)
      const quantity = product.quantity
      const singleItemPrice = Number(product.price.vinyl)
      const totalItemsPrice = quantity * singleItemPrice

      if (state.cartQuantity < quantity) {
        state.cartQuantity = 0
      } else {
        state.cartQuantity -= quantity
      }
      state.cartTotal -= totalItemsPrice
      state.cartItems = state.cartItems.filter((data) => data.docId !== payload)
    },
    increaseQuantity: (state, { payload }) => {
      const product = state.cartItems.find((item) => item.id === payload.id)
      product.quantity += 1
      state.cartQuantity += 1
    },
    decreaseQuantity: (state, { payload }) => {
      const product = state.cartItems.find((item) => item.id === payload.id)

      if (state.cartQuantity > 0) {
        state.cartQuantity -= 1
      }

      if (product.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (data) => data.id !== payload.id
        )
      } else {
        product.quantity -= 1
      }
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions

export const selectCart = (state) => state.cart

export default cartSlice.reducer
