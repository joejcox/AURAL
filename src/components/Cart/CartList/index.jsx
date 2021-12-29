import CartItem from "components/Cart/CartList/CartItem"

const CartList = () => {
  return (
    <div className="w-full lg:w-2/3 flex-2 lg:mr-2">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
}

export default CartList
