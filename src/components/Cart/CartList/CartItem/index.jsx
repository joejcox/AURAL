import { XIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"

const CartItem = () => (
  <article className="bg-white mb-2 relative p-6">
    <div className="absolute top-3 right-3">
      <XIcon className="w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
    </div>
    <div className="flex">
      <figure className="w-28 h-28">
        <img
          src="https://via.placeholder.com/130"
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="pl-6">
        <h2 className="text-xl text-gray-500">
          <Link to="/cart" className="text-main-400 hover:underline">
            Music Has The Right To Children
          </Link>
        </h2>
        <h3 className="text-lg text-gray-400">Boards of Canada</h3>
      </div>
    </div>
  </article>
)

export default CartItem
