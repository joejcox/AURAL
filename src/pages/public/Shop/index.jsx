import { useSelector } from "react-redux"
import { selectProducts } from "features/products/productsSlice"
import Container from "core/Container"
import { Link } from "react-router-dom"

const Shop = () => {
  const { products } = useSelector(selectProducts)

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl text-center uppercase font-extrabold">
          Products
        </h1>
      </Container>
      <section className="mt-16">
        <Container classes="flex flex-wrap border-b border-gray-200 pb-8">
          {products.map((product) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-4">
              <div className="w-full md:w-52 md:h-52 relative cursor-pointer mx-auto">
                <Link to={product.id}>
                  <img
                    src={product.artwork}
                    alt={product.album_title}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-md">{product.artist}</h3>
                <h4 className="text-sm text-gray-400">{product.album_title}</h4>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </div>
  )
}

export default Shop
