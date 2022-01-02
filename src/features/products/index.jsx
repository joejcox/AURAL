import ProductGridItem from "features/products/ProductGridItem"
import ProductGridContainer from "features/products/ProductGridItem/ProductGridContainer"
import useProducts from "features/products/useProducts"

const Products = () => {
  const { products } = useProducts()

  return (
    <ProductGridContainer>
      {products.map((product) => (
        <ProductGridItem product={product} key={product.docId} />
      ))}
    </ProductGridContainer>
  )
}

export default Products
