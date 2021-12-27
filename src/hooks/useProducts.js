import { useSelector } from "react-redux"
import { selectProducts } from "features/products/productsSlice"

const useProducts = () => {
  const { products, featured, status } = useSelector(selectProducts)

  return { products, featured, status }
}

export default useProducts
