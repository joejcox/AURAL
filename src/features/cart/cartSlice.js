import { createSlice } from "@reduxjs/toolkit"

// global cart state
// cartItems is an array of a list of items in cart

// type Price = {
//   Vinyl: string,
//   Mp3: string,
//   CD: string,
// }

// type CartItem = {
//   artist: string,
//   album_title: string,
//   price: Price,
//   artwork: string,
//   quantity: number
// }

// interface CartState {
//   cartItems: CartItem[],
//   cartTotal: number,
//   cartQuantity: number,
// }

const initialState = {
  cartItems: [],
  cartTotal: 0.0,
  cartQuantity: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add item to cartItems - payload should be the full product object
    addToCart: (state, { payload }) => {
      // spread payload in to a new object and add quantity key and value
      const product = { ...payload, quantity: 1 }

      // get the vinyl price for now
      const price = Number(payload.price.vinyl)

      // check if item exists within the current cartItems state
      const item = state.cartItems.find((item) => item.docId === payload.docId)

      // increase cartTotal by the price of the item added
      state.cartTotal += price

      // increase the entire cart quantity by 1 when product is added
      state.cartQuantity += 1

      // if the item exists, increase its quantity by 1 otherwise push it to the cart
      if (item) {
        item.quantity += 1
      } else {
        state.cartItems.push(product)
      }
    },

    // remove frmo cart should only take the docId as the payload
    removeFromCart: (state, { payload }) => {
      // find the cart item based on its docId
      const product = state.cartItems.find((item) => item.docId === payload)
      // get the item's current quantity
      const quantity = product.quantity
      // figure out the cost of a single product
      const singleItemPrice = Number(product.price.vinyl)
      // get the total cost in cart by multiplying its quantity by the cost of 1 product
      const totalItemsPrice = quantity * singleItemPrice

      // if the cart quantity is less than the quantity found somehow, set cartQuantity to 0
      // otherwise minus the quantity of this product in particular from the cartQuantity
      if (state.cartQuantity < quantity) {
        state.cartQuantity = 0
      } else {
        state.cartQuantity -= quantity
      }

      // remove the cost of quantity x single cost from the cartTotal
      state.cartTotal -= totalItemsPrice

      // set new cartItems filtering and returning a new array without the removed product
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
