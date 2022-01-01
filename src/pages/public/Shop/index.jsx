import Products from "components/Products"
import PageTitle from "core/PageTitle"

const Shop = () => {
  return (
    <section>
      <PageTitle>All Products</PageTitle>
      <div className="mt-16">
        <Products />
      </div>
    </section>
  )
}

export default Shop
