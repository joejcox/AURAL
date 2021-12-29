import Layout from "core/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "pages/public/Home"
import { useEffect } from "react"
import { getData } from "features/products/productsSlice"
import { useDispatch } from "react-redux"
import SingleProduct from "components/Products/SingleProduct"
import Shop from "pages/public/Shop"
import auth from "services/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { setUser } from "features/user/userSlice"
import SignIn from "pages/public/SignIn"
import SignUp from "pages/public/SignUp"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }))
      } else {
        dispatch(setUser(null))
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Layout>
  )
}

export default App
