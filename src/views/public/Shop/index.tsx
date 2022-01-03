import Products from "features/products"
import PageTitle from "core/PageTitle"
import { Helmet } from "react-helmet-async"
import { FunctionComponent } from "react"

const Shop: FunctionComponent = () => {
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
