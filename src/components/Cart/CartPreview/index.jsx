import useCart from "hooks/useCart"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { XIcon } from "@heroicons/react/solid"
import { useContext, useEffect } from "react"
import { CartPreviewContext } from "context/CartPreviewContext"

const CartPreview = () => {
  const { classes, hideCartPreview } = useContext(CartPreviewContext)
  const dispatch = useDispatch()
  const { cartItems, removeFromCart } = useCart()

  useEffect(() => {
    const timeout3secs = setTimeout(() => hideCartPreview(), 3000)

    return () => window.clearTimeout(timeout3secs)
  }, [classes, hideCartPreview])

  return (
    <div
      className={`transition-opacity ease-in-out duration-200 motion-reduce:transition-none hidden lg:block p-2 absolute top-[150%] right-0 w-[400px] h-auto max-h-96 overflow-y-scroll z-[500] bg-white rounded shadow ${classes}`}
    >
      {cartItems.map((cartItem) => (
        <div
          className="w-full p-2 flex bg-gray-100 relative mb-2"
          key={cartItem.docId}
        >
          <div
            className="absolute top-2 bottom-2 right-2 flex items-center"
            onClick={() => dispatch(removeFromCart())}
          >
            <XIcon className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
          <figure className="w-12 h-12">
            <img
              src={cartItem.artwork}
              alt={cartItem.album_title}
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="pl-4">
            <h4 className="text-lg">
              <Link
                to={`/products/${cartItem.docId}`}
                className="text-main-400 hover:underline"
              >
                {cartItem.album_title}
              </Link>
            </h4>
            <div className="text-gray-400">
              {cartItem.quantity} x £{cartItem.price.vinyl}
            </div>
          </div>
        </div>
      ))}
      <Link
        onClick={hideCartPreview}
        to="/cart"
        className="block text-white uppercase font-bolder font-primary bg-black py-1 hover:bg-gray-800 text-center"
      >
        View Cart
      </Link>
    </div>
  )
}

export default CartPreview
