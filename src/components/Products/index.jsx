import ProductGridItem from "components/Products/ProductGridItem"
import ProductGridContainer from "components/Products/ProductGridItem/ProductGridContainer"
import useProducts from "hooks/useProducts"

const Products = () => {
  const { products } = useProducts()
  return (
    <ProductGridContainer>
      {products.map((product) => (
        <ProductGridItem product={product} key={product.id} />
      ))}
    </ProductGridContainer>
  )
}

export default Products
