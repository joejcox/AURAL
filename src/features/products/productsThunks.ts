import { createAsyncThunk } from "@reduxjs/toolkit"
import { collection, CollectionReference, getDocs } from "firebase/firestore"
import { db } from "services/firebase"

interface Price {
  vinyl: string
  mp3: string
  cd: string
}

interface TrackDetails {
  track_title: string
  track_length: string
}

interface dbProduct {
  id: string
  artist: string
  album_title: string
  genres: string[]
  track_list: TrackDetails[]
  runtime: string
  formats: string[]
  price: Price
  tags: string[]
  release_date: string
  artwork: string
}

interface Product extends dbProduct {
  docId: string
}

export const getProductsFromFirestore = createAsyncThunk(
  "products/getProductsFromFirestore",
  async () => {
    try {
      const collectionRef = collection(
        db,
        "products"
      ) as CollectionReference<dbProduct>
      const collectionSnap = await getDocs(collectionRef)
      const products: Product[] = []
      collectionSnap.forEach((product) => {
        products.push({ docId: product.id, ...product.data() })
      })

      return products
    } catch (error) {
      return error
    }
  }
)
