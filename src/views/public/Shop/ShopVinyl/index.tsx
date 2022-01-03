import { FunctionComponent, useEffect, useState } from "react"
import ProductGridItem from "features/products/ProductGridItem"
import ProductGridContainer from "features/products/ProductGridItem/ProductGridContainer"
import useProducts from "features/products/useProducts"
import { Helmet } from "react-helmet-async"
import PageTitle from "core/PageTitle"

const ShopVinyl: FunctionComponent = () => {
  const { products } = useProducts()
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
      <ProductGridContainer>
        {vinylProducts.map((product) => (
          <ProductGridItem product={product} key={product.docId} />
        ))}
      </ProductGridContainer>
    </section>
  )
}

export default ShopVinyl
