import CartItem from "components/Cart/CartList/CartItem"
import { useSelector } from "react-redux"
import { selectCart } from "features/cart/cartSlice"

const CartList = () => {
  const { cartItems } = useSelector(selectCart)

  return (
    <div className="w-full lg:w-2/3 flex-2 lg:mr-2">
      {cartItems.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </div>
  )
}

export default CartList
