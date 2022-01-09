import { useSelector } from "react-redux"
import { selectCart } from "features/cart/cartSlice"
import {
  emptyCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "features/cart/cartSlice"

// cart hook to put all cart actions and state in one place

const useCart = () => {
  const { cartItems, cartTotal, cartQuantity } = useSelector(selectCart)

  return {
    emptyCart,
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
