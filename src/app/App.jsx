import Layout from "core/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "pages/public/Home"
import { useEffect } from "react"
import { getData } from "features/products/productsSlice"
import { useDispatch, useSelector } from "react-redux"
import SingleProduct from "components/Products/SingleProduct"
import Shop from "pages/public/Shop"
import auth from "services/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { setUser } from "features/user/userSlice"
import { selectUser } from "features/user/userSlice"

const App = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDetails = {
          uid: user.uid,
          email: user.email,
        }
        dispatch(setUser(userDetails))
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <Layout>
      {currentUser && <h1 className="text-3xl">{currentUser.email}</h1>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
    </Layout>
  )
}

export default App
