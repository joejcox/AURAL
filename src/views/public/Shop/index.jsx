import Products from "features/products"
import PageTitle from "core/PageTitle"
import { Helmet } from "react-helmet-async"

const Shop = () => {
  return (
    <section>
      <Helmet>
        <title>Shop | Aural Records</title>
      </Helmet>
      <PageTitle>All Products</PageTitle>
      <Products />
    </section>
  )
}

export default Shop
