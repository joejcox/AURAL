import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectProducts } from "features/products/productsSlice"
import Container from "core/Container"
import ButtonLink from "core/ButtonLink"
import { Helmet } from "react-helmet-async"

const SingleProduct = () => {
  const { productId } = useParams()
  const { products } = useSelector(selectProducts)
  const product = products.find((item) => item.id === productId)

  if (!product) return null

  const trackList = product.track_list.map((track) => {
    console.log(track.track_title)
    return (
      <li>
        {track.track_title} ({track.track_length})
      </li>
    )
  })

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
            <h1 className="text-4xl">{product.artist}</h1>
            <h2 className="text-xl mb-3">{product.album_title}</h2>
          </div>
          <ButtonLink path="/" classes="bg-black text-white hover:bg-main-400">
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
                <b>Genres:</b> {product.genres.join(", ")}
              </p>
              <p>
                <b>Formats:</b> {product.formats.join(", ")}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <b>Track List:</b>
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
