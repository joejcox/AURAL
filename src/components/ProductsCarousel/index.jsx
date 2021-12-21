import { useEffect } from "react"
import Swiper, { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

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
    <div className="swiper w-full max-w-6xl h-80 px-6 xl:px-0 mx-auto my-16 relative">
      {/* <!-- Additional required wrapper --> */}
      <div className="swiper-wrapper">
        {/* <!-- Slides --> */}
        <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
          <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
          <h2 className="text-xl">Boards of Canada</h2>
          <h3 className="text-md text-gray-700">MHTRTC</h3>
        </div>
        <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
          <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
          <h2 className="text-xl">Yeah Yeah Yeahs</h2>
          <h3 className="text-md text-gray-700">Gold Lion</h3>
        </div>
        <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
          <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
          <h2 className="text-xl">Turnstile</h2>
          <h3 className="text-md text-gray-700">Glow On</h3>
        </div>
        <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
          <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
          <h2 className="text-xl">Aphex Twin</h2>
          <h3 className="text-md text-gray-700">Selected Ambient Works</h3>
        </div>
        <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
          <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
          <h2 className="text-xl">Aphex Twin</h2>
          <h3 className="text-md text-gray-700">Selected Ambient Works</h3>
        </div>
        <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
          <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
          <h2 className="text-xl">Aphex Twin</h2>
          <h3 className="text-md text-gray-700">Selected Ambient Works</h3>
        </div>
        <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
          <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
          <h2 className="text-xl">Aphex Twin</h2>
          <h3 className="text-md text-gray-700">Selected Ambient Works</h3>
        </div>
        <div className="swiper-slide w-full md:w-1/2 xl:w-1/4 flex flex-col items-center">
          <div className=" w-52 h-52 bg-gray-400 mb-6"></div>
          <h2 className="text-xl">Aphex Twin</h2>
          <h3 className="text-md text-gray-700">Selected Ambient Works</h3>
        </div>
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
