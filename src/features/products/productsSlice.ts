import { createSlice } from "@reduxjs/toolkit"
import { getProductsFromFirestore } from "features/products/productsThunks"
import { Product } from "features/products"

interface ProductsInitialState {
  featured: Product[]
  products: Product[]
  status?: string
  error?: string | null
}

interface ProductsState {
  products: ProductsInitialState
}

const initialState: ProductsInitialState = {
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
        if (payload.error) {
          state.error = payload.error.code
          return
        }
        state.products.push(...payload)
        state.featured.push(...payload)
      }
    )
  },
})

export const selectProducts = (state: ProductsState) => state.products

export default productsSlice.reducer
