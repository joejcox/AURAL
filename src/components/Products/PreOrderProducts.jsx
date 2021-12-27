import ProductsCarousel from "components/Products/ProductsCarousel"
import useProducts from "hooks/useProducts"

const PreOrderProducts = ({ theme, bgImgClass = "" }) => {
  const { products, status } = useProducts()
  const today = new Date().getTime()
  const preOrderProducts = products.filter(
    (product) => parseInt(product.release_date) > today
  )
  const textColor = `${theme === "dark" ? "text-white" : "text-gray-800"}`

  if (preOrderProducts.length <= 0) return null
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
        status={status}
        products={preOrderProducts}
      />
    </section>
  )
}

export default PreOrderProducts
