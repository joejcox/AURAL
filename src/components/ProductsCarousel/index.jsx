import { useEffect } from "react"
import Swiper, { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ProductCard from "./ProductCard"

const ProductsCarousel = ({ textColor, status, products }) => {
  useEffect(() => {
    new Swiper(".swiper", {
      // Optional parameters
      loop: false,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".swiper-pagination",
      },
      grid: {
        slidesPerColumnFill: "row",
        rows: 4,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 40,
      breakpoints: {
        240: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        520: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        840: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    })

    Swiper.use([Navigation, Pagination])
  }, [])

  if (!status || status === "loading") return null

  return (
    // <!-- Slider main container -->
    <div className="swiper w-full h-80 max-w-6xl px-6 xl:px-0 mx-auto my-16 relative">
      {/* <!-- Additional required wrapper --> */}
      <div className="swiper-wrapper pb-10">
        {products.map((product) => (
          <ProductCard
            textColor={textColor}
            data={product}
            key={product.album_title}
          />
        ))}
      </div>

      {/* <!-- If we need navigation buttons --> */}
      <div className="swiper-button-prev hidden md:block absolute left-0 mr-20 top-1/3 text-gray-300"></div>
      <div className="swiper-button-next hidden md:block  absolute right-0 top-1/3 text-gray-300"></div>

      {/* <!-- If we need scrollbar --> */}
      <div className="swiper-scrollbar"></div>
    </div>
  )
}

export default ProductsCarousel
