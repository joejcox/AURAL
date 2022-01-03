import Layout from "core/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "views/public/Home"
import { useEffect } from "react"
import { getProductsFromFirestore } from "features/products/productsThunks"
import { useAppDispatch } from "app/store"
import SingleProduct from "features/products/SingleProduct"
import Shop from "views/public/Shop"
import auth, { getUserFromFirestore } from "services/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { setError, setUser } from "features/user/userSlice"
import SignIn from "views/public/SignIn"
import SignUp from "views/public/SignUp"
import Cart from "views/public/Cart"
import useProducts from "features/products/useProducts"
import ShopVinyl from "views/public/Shop/ShopVinyl"
import Error404 from "views/public/Error404"
import Account from "views/private/Account"
import AccountSettings from "views/private/Account/AccountSettings"
import PrivateRoute from "components/PrivateRoute"
import { FirebaseError } from "firebase/app"

interface User {
  name: string
  email: string
  uid: string
}

const App = () => {
  // if there's an error getting products, pull it from useProducts hook within products feature
  const { error } = useProducts()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // await user data from firestore then set global user state with the new information
    const getUserData = async (uid: string) => {
      const response = await getUserFromFirestore(uid)

      if (response instanceof FirebaseError) {
        dispatch(setError(response.code))
        return
      }

      dispatch(setUser(response as User))
    }

    // firebase auth listener, when a user logs in this will trigger
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      // if the user exists we will run the getUserData function to set global user state
      // if no user, then we need to set the global user state to null
      if (authUser) {
        getUserData(authUser.uid)
      } else {
        dispatch(setUser(null))
      }
    })

    // unsubscribe from auth listener on dismount
    return () => unsubscribe()
  }, [dispatch])

  useEffect(() => {
    // dispatch the thunk in products feature to pull products from firestore and set in global products state
    dispatch(getProductsFromFirestore())
  }, [dispatch])

  if (error)
    return (
      <div className="py-16 bg-gray-100 text-3cl text-center">501 Error</div>
    )

  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/vinyl" element={<ShopVinyl />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<PrivateRoute />}>
          <Route index element={<Account />} />
          <Route path="/account/settings" element={<AccountSettings />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
