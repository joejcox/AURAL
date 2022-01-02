import CartItem from "features/cart/CartItem"
import useCart from "features/cart/useCart"

const CartList = () => {
  const { cartItems } = useCart()

  return (
    <div className="w-full lg:w-2/3 flex-2 lg:mr-2">
      {cartItems.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </div>
  )
}

export default CartList
