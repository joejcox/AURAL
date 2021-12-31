import { useSelector } from "react-redux"
import { selectProducts } from "features/products/productsSlice"

const useProducts = () => {
  const { products, featured, status, error } = useSelector(selectProducts)

  return { products, featured, status, error }
}

export default useProducts
