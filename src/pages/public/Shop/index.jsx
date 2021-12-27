import Container from "core/Container"
import Section from "core/Section"
import Products from "components/Products"

const Shop = () => {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl text-center uppercase font-extrabold">
          Products
        </h1>
      </Container>
      <div className="mt-16">
        <Products />
      </div>
    </Section>
  )
}

export default Shop
