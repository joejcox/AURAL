import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectProducts } from "features/products/productsSlice"

const SingleProduct = () => {
  const { products } = useSelector(selectProducts)
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl">{product.artist}</h1>
        <h2 className="text-xl">{product.album_title}</h2>
      </div>
    </section>
  )
}

export default SingleProduct
