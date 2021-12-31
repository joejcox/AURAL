import Layout from "core/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "pages/public/Home"
import { useEffect } from "react"
import { getProductsFromFirestore } from "features/products/productsSlice"
import { useDispatch } from "react-redux"
import SingleProduct from "components/Products/SingleProduct"
import Shop from "pages/public/Shop"
import auth, { getUserFromFirestore } from "services/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { setError, setUser } from "features/user/userSlice"
import SignIn from "pages/public/SignIn"
import SignUp from "pages/public/SignUp"
import Cart from "components/Cart"
import useProducts from "hooks/useProducts"

const App = () => {
  const { error, status } = useProducts()
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

  if (status === "loading")
    return (
      <div className="py-16 bg-gray-100 text-3cl text-center">Loading...</div>
    )

  return (
    <Layout>
      <Routes>
        <Route
          path="*"
          element={
            <div className="py-16 text-3xl text-center bg-gray-100">
              404 Page Not Found
            </div>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  )
}

export default App
