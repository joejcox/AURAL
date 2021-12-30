import { Link } from "react-router-dom"
import { ShoppingBagIcon } from "@heroicons/react/solid"

const ProductCard = ({ textColor, data }) => {
  const { artist, album_title, id, artwork } = data

  return (
    <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
      <div className="w-52 h-52  mb-6 relative">
        <Link to={`/products/${id}`}>
          <img
            src={artwork}
            alt={artist}
            className="w-full h-full object-cover"
          />
        </Link>
        <Link
          to="/test"
          className="absolute bottom-4 right-4 bg-black rounded p-2"
        >
          <ShoppingBagIcon className="text-white w-6 h-6" />
        </Link>
      </div>
      <h2 className={`text-center text-lg p-1 ${textColor}`}>
        <Link to={`/products/${id}`} className="hover:underline">
          {album_title}
        </Link>
      </h2>
      <h3 className={`text-md ${textColor}`}>{artist}</h3>
    </div>
  )
}

export default ProductCard
