import { XIcon } from "@heroicons/react/solid"
import { removeFromCart } from "features/cart/cartSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <article className="bg-white mb-2 relative p-6">
      <div
        className="absolute top-3 right-3"
        onClick={() => dispatch(removeFromCart(product))}
      >
        <XIcon className="w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
      </div>
      <div className="flex">
        <figure className="w-16 h-14 md:w-28 md:h-28">
          <img
            src={product.artwork}
            alt="placeholder"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="ml-2 md:ml-6">
          <h2 className="text-xl text-gray-500">
            <Link
              to={`/products/${product.id}`}
              className="text-main-400 hover:underline"
            >
              {product.album_title}
            </Link>
          </h2>
          <h3 className="text-lg text-gray-400">{product.artist}</h3>
          <p className="text-lg">
            {product.quantity} x £{product.price.vinyl}
          </p>
        </div>
      </div>
    </article>
  )
}

export default CartItem
