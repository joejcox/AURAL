import { useSelector } from "react-redux"
import { selectProducts } from "features/products/productsSlice"
import Container from "core/Container"
import ProductGridItem from "components/Products/ProductGridItem"
import ProductGridContainer from "components/Products/ProductGridItem/ProductGridContainer"
import Section from "core/Section"

const Shop = () => {
  const { products } = useSelector(selectProducts)

  return (
    <Section>
      <Container>
        <h1 className="text-3xl text-center uppercase font-extrabold">
          Products
        </h1>
      </Container>
      <div className="mt-16">
        <ProductGridContainer>
          {products.map((product) => (
            <ProductGridItem product={product} key={product.id} />
          ))}
        </ProductGridContainer>
      </div>
    </Section>
  )
}

export default Shop
