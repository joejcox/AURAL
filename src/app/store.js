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

// using redux persist to save specific pieces of global state to local storage

// config for cart only, ignores products and user state
const cartPersistConfig = {
  key: "cart",
  storage: storage,
  blacklist: ["products", "user"],
}

// configure our redux store using redux toolkit
export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    // redux persist uses the persistReducer which takes a config and the required reducer as paramaters
    cart: persistReducer(cartPersistConfig, cartReducer),
  },
  // we need to ignore certain actions that come with redux persist to avoid serializableCheck error
  // this is an issue with the redux persist code.
  // It was showing an error even when only serializable data was being dispatched.
  // The below middleware has fixed the issue
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
