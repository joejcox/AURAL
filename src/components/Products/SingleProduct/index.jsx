import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectProducts } from "features/products/productsSlice"
import Container from "core/Container"
import ButtonLink from "core/ButtonLink"
import { Helmet } from "react-helmet-async"
import { formatDate } from "helpers/utils"
import useCart from "hooks/useCart"
import { useDispatch } from "react-redux"

const SingleProduct = () => {
  const dispatch = useDispatch()
  const { addToCart } = useCart()
  const { productId } = useParams()
  const { products } = useSelector(selectProducts)
  const product = products.find((item) => item.id === productId)

  if (!product) return null

  const trackList = product.track_list.map((track) => {
    return (
      <li key={track.track_title}>
        {track.track_title} ({track.track_length})
      </li>
    )
  })

  const dateInSeconds = parseInt(product.release_date)
  const { date } = formatDate(dateInSeconds)

  return (
    <section className="py-16">
      <Helmet>
        <title>
          {product.artist} - {product.album_title} | Aural Records
        </title>
      </Helmet>
      <Container>
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl">{product.album_title}</h1>
            <h2 className="text-2xl mb-3 text-gray-500">{product.artist}</h2>
          </div>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="inline-block py-3 px-6 ml-0 md:ml-auto bg-black text-white hover:bg-main-400 uppercase font-primary"
          >
            Add To Cart
          </button>
          <ButtonLink
            path="/"
            classes="bg-main-400 text-white hover:bg-main-500 ml-2 mr-auto md:mr-0"
          >
            Buy Now
          </ButtonLink>
        </div>
        <hr className="mb-3" />
        <div className="flex flex-wrap">
          <div>
            <div className="artwork w-72 h-72 mr-10">
              <img
                src={product.artwork}
                alt={product.album_title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <p>
                <b>Releast Date:</b> {date}
              </p>
              <p>
                <b>Genres:</b> {product.genres.join(", ")}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl mb-2">Track List:</h3>
            <ol className="list-decimal list-inside">{trackList}</ol>
            <p className="my-2">
              <b>Total runtime: </b>
              {product.runtime}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SingleProduct
