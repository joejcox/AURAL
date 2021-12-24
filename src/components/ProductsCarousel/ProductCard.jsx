import { Link } from "react-router-dom"

const ProductCard = ({ textColor, data }) => {
  const { artist, album_name, id } = data

  return (
    <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
      <Link to={`/products/${id}`}>
        <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
      </Link>
      <h2 className={`text-xl p-1 ${textColor}`}>{artist}</h2>
      <h3 className={`text-md ${textColor}`}>{album_name}</h3>
    </div>
  )
}

export default ProductCard
