import useCart from "features/cart/useCart"

const CartTotalPrice = () => {
  const { cartTotal } = useCart()
  return (
    <div className="">
      <h3 className="text-2xl text-gray-800 text-primary uppercase font-extrabold">
        Total
      </h3>
      <span className="text-2xl">£{cartTotal.toFixed(2)}</span>
    </div>
  )
}

export default CartTotalPrice
