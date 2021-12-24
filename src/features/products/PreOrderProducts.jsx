import ProductsCarousel from "components/ProductsCarousel"
import { useSelector } from "react-redux"
import { selectProducts } from "./productsSlice"

const PreOrderProducts = ({ theme, bgImgClass = "" }) => {
  const products = useSelector(selectProducts)
  const textColor = `${theme === "dark" ? "text-white" : "text-gray-800"}`
  return (
    <section
      className={`pt-20 pb-10 bg-no-repeat bg-cover relative z-0 ${bgImgClass}`}
    >
      {bgImgClass !== "" && (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-25 -z-1"></div>
      )}
      <h2
        className={`text-3xl text-center uppercase font-extrabold ${textColor}`}
      >
        Hottest Pre-Orders
      </h2>
      <ProductsCarousel
        textColor={textColor}
        status={products.status}
        products={products.featured}
      />
    </section>
  )
}

export default PreOrderProducts
