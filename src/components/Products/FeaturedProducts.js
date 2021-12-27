import ProductsCarousel from "components/Products/ProductsCarousel"
import useProducts from "hooks/useProducts"

const FeaturedProducts = ({ theme, bgImgClass = "" }) => {
  const { featured, status } = useProducts()
  const textColor = `${theme === "dark" ? "text-white" : "text-gray-800"}`

  return (
    <section
      className={`pt-20 pb-10 bg-no-repeat bg-cover relative z-0 ${bgImgClass}`}
    >
      {bgImgClass !== "" && (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-25 -z-1"></div>
      )}
      <h2
        className={`text-3xl text-white text-center uppercase font-extrabold ${textColor}`}
      >
        Featured Products
      </h2>
      <ProductsCarousel
        textColor={textColor}
        status={status}
        products={featured}
      />
    </section>
  )
}

export default FeaturedProducts
