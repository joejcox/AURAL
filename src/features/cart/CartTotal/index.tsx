import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import CartTotalPrice from "./CartTotalPrice"

const CartTotal: FunctionComponent = () => (
  <div className="w-1/3 bg-white flex-1 p-6 mt-4 lg:mt-0">
    <CartTotalPrice />
    <Link
      to="/checkout"
      className="mt-4 text-white bg-black hover:bg-gray-800 w-full text-center uppercase font-extrabold font-primary block p-2"
    >
      Checkout
    </Link>
  </div>
)

export default CartTotal
