import { configureStore } from "@reduxjs/toolkit"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
