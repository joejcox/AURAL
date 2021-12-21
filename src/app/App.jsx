import Layout from "core/Layout"
import screenshot from "assets/images/AURAL_HOME_UNAUTH_USER.png"
import { Route, Routes } from "react-router-dom"
import Home from "pages/public/Home"
import ProductsCarousel from "components/ProductsCarousel"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <section className="py-20">
        <h2 className="text-3xl text-gray-800 text-center uppercase font-extrabold">
          Hottest Pre-Orders
        </h2>
        <ProductsCarousel />
      </section>
      <img className="mx-auto" src={screenshot} alt="Aural Mockup" />
    </Layout>
  )
}

export default App
