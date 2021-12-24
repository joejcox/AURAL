import { useSelector } from "react-redux"
import { selectProducts } from "features/products/productsSlice"
import Container from "core/Container"
import { Link } from "react-router-dom"

const Shop = () => {
  const { products } = useSelector(selectProducts)

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl">Products</h1>
      </Container>
      <section className="py-8 mt-8">
        <Container classes="flex flex-wrap">
          {products.map((product) => (
            <div className="w-full sm:w-1/2 md:w-1/4 2xl:w-1/5 p-2">
              <Link to={product.id}>
                <img
                  src={product.artwork}
                  alt={product.album_title}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          ))}
        </Container>
      </section>
    </div>
  )
}

export default Shop
