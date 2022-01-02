import { createSlice } from "@reduxjs/toolkit"
import { getProductsFromFirestore } from "features/products/productsThunks"

const initialState = {
  featured: [],
  products: [],
  status: "idle",
  error: null,
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProductsFromFirestore.fulfilled,
      (state, { payload }) => {
        if (payload instanceof Error) {
          state.error = payload.code
          return
        }
        state.products.push(...payload)
        state.featured.push(...payload)
      }
    )
  },
})

export const { getData, setData } = productsSlice.actions

export const selectProducts = (state) => state.products

export default productsSlice.reducer
