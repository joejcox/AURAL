const ProductCard = ({ artist, album_name }) => (
  <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
    <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
    <h2 className="text-xl text-gray-800 p-1">{artist}</h2>
    <h3 className="text-md text-gray-700">{album_name}</h3>
  </div>
)

export default ProductCard
