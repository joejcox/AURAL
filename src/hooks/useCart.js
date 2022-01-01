import { useSelector } from "react-redux"
import { selectCart } from "features/cart/cartSlice"
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "features/cart/cartSlice"

const useCart = () => {
  const { cartItems, cartTotal, cartQuantity } = useSelector(selectCart)

  return {
    cartItems,
    cartTotal,
    cartQuantity,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  }
}

export default useCart
