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
      <section className="pt-20 pb-10">
        <h2 className="text-3xl text-gray-800 text-center uppercase font-extrabold">
          Hottest Pre-Orders
        </h2>
        <ProductsCarousel />
      </section>
      <section className="pt-20 pb-10 bg-carousel bg-no-repeat bg-cover dark-bg relative z-0">
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-25 -z-1"></div>
        <h2 className="text-3xl text-white text-center uppercase font-extrabold">
          Featured Releases
        </h2>
        <ProductsCarousel />
      </section>
      <img className="mx-auto hidden" src={screenshot} alt="Aural Mockup" />
    </Layout>
  )
}

export default App
