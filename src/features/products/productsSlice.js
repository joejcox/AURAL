import { createSlice } from "@reduxjs/toolkit"
import jsonData from "../../mockData/products.json"

const initialState = {
  featured: [],
  products: [],
  status: "idle",
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getData: (state) => {
      const data = JSON.parse(JSON.stringify(jsonData))
      state.featured = data
      state.products = data
    },
  },
})

export const { getData } = productsSlice.actions

export const selectProducts = (state) => state.products

export default productsSlice.reducer
