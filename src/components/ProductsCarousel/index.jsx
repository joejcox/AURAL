import { useEffect } from "react"
import Swiper, { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ProductCard from "./ProductCard"

const ProductsCarousel = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      // Optional parameters
      loop: false,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      grid: {
        slidesPerColumnFill: "row",
        rows: 4,
      },

      // Navigation arrows
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
        1580: {
          slidesPerView: 6,
          spaceBetween: 60,
        },
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    })

    Swiper.use([Navigation, Pagination])
  }, [])

  return (
    // <!-- Slider main container -->
    <div className="swiper w-full max-w-6xl h-96 px-6 xl:px-0 mx-auto my-16 relative">
      {/* <!-- Additional required wrapper --> */}
      <div className="swiper-wrapper pb-10">
        {/* <!-- Slides --> */}
        <ProductCard artist="Boards of Canada" album_name="MHTRTC" />
        <ProductCard artist="Yeah Yeah Yeahs" album_name="Gold Lion" />
        <ProductCard artist="Turnstile" album_name="Glow On" />
        <ProductCard artist="Aphex Twin" album_name="Selected Ambient Works" />
        <ProductCard artist="Bibio" album_name="Random Title" />
        <ProductCard artist="Arcade Fire" album_name="Funeral" />
      </div>
      {/* <!-- If we need pagination --> */}
      <div className="swiper-pagination"></div>

      {/* <!-- If we need navigation buttons --> */}
      <div className="swiper-button-prev absolute left-0 mr-20 top-1/3 text-gray-300"></div>
      <div className="swiper-button-next absolute right-0 top-1/3 text-gray-300"></div>

      {/* <!-- If we need scrollbar --> */}
      <div className="swiper-scrollbar"></div>
    </div>
  )
}

export default ProductsCarousel
