import { useEffect, useState } from "react"
import ProductGridItem from "components/Products/ProductGridItem"
import ProductGridContainer from "components/Products/ProductGridItem/ProductGridContainer"
import useProducts from "hooks/useProducts"
import { Helmet } from "react-helmet-async"
import PageTitle from "core/PageTitle"

const ShopVinyl = () => {
  const { products } = useProducts()
  console.log(products)
  const [vinylProducts, setVinylProducts] = useState(products)

  useEffect(() => {
    const filter = products.filter((product) =>
      product.formats.includes("Vinyl")
    )
    setVinylProducts(filter)
  }, [products])

  return (
    <section>
      <Helmet>
        <title>Vinyl Products | Aural Records</title>
      </Helmet>
      <PageTitle>Vinyl</PageTitle>
      <div className="my-16">
        <ProductGridContainer>
          {vinylProducts.map((product) => (
            <ProductGridItem product={product} key={product.docId} />
          ))}
        </ProductGridContainer>
      </div>
    </section>
  )
}

export default ShopVinyl
