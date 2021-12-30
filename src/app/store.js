import { configureStore } from "@reduxjs/toolkit"

import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

import productsReducer from "features/products/productsSlice"
import userReducer from "features/user/userSlice"
import cartReducer from "features/cart/cartSlice"

const cartPersistConfig = {
  key: "cart",
  storage: storage,
  blacklist: ["products", "user"],
}

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
  },
})

export const persistor = persistStore(store)
