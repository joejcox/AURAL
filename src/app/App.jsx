import Layout from "core/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "pages/public/Home"
import { useEffect } from "react"
import { getData } from "features/products/productsSlice"
import { useDispatch } from "react-redux"
import SingleProduct from "components/Products/SingleProduct"
import Shop from "pages/public/Shop"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
    </Layout>
  )
}

export default App
