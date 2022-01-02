import { createAsyncThunk } from "@reduxjs/toolkit"
import { collection, getDocs } from "firebase/firestore"
import { db } from "services/firebase"

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
