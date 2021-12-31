import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "services/firebase"
import { collection, getDocs } from "firebase/firestore"

const initialState = {
  featured: [],
  preOrders: [],
  products: [],
  status: "idle",
  error: null,
}

export const getProductsFromFirestore = createAsyncThunk(
  "products/getProductsFromFirestore",
  async () => {
    try {
      const collectionRef = collection(db, "products")
      const collectionSnap = await getDocs(collectionRef)
      const products = []
      collectionSnap.forEach((product) => {
        products.push({ docId: product.id, ...product.data() })
      })

      return products
    } catch (error) {
      return error
    }
  }
)

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
        const today = new Date().getTime()
        state.preOrders = payload.filter(
          (product) => Number(product.release_date) > today
        )
        state.products.push(...payload)
        state.featured.push(...payload)
      }
    )
  },
})

export const { getData, setData } = productsSlice.actions

export const selectProducts = (state) => state.products

export default productsSlice.reducer
