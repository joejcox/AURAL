import Layout from "core/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "views/public/Home"
import { useEffect } from "react"
import { getProductsFromFirestore } from "features/products/productsThunks"
import { useDispatch } from "react-redux"
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

const App = () => {
  const { error } = useProducts()
  const dispatch = useDispatch()

  useEffect(() => {
    const getUserData = async (uid) => {
      const response = await getUserFromFirestore(uid)

      if (response.error) {
        dispatch(setError(response.error.code))
        return
      }

      dispatch(setUser(response))
    }
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        getUserData(authUser.uid)
      } else {
        dispatch(setUser(null))
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  useEffect(() => {
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
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/shop/vinyl" element={<ShopVinyl />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  )
}

export default App
