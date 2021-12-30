import { useSelector } from "react-redux"
import { selectCart } from "features/cart/cartSlice"
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "features/cart/cartSlice"

const useCart = () => {
  const { cartItems, cartTotal } = useSelector(selectCart)

  return {
    cartItems,
    cartTotal,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  }
}

export default useCart
