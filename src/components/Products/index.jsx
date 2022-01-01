import ProductGridItem from "components/Products/ProductGridItem"
import ProductGridContainer from "components/Products/ProductGridItem/ProductGridContainer"
import useProducts from "hooks/useProducts"
import { Helmet } from "react-helmet-async"

const Products = () => {
  const { products } = useProducts()

  return (
    <ProductGridContainer>
      <Helmet>
        <title>Shop | Aural Records</title>
      </Helmet>
      {products.map((product) => (
        <ProductGridItem product={product} key={product.docId} />
      ))}
    </ProductGridContainer>
  )
}

export default Products
