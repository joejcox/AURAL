import useCart from "features/cart/useCart"
import { Link } from "react-router-dom"
import { XIcon } from "@heroicons/react/solid"
import { FunctionComponent, useContext, useEffect, useRef } from "react"
import { CartPreviewContext } from "context/CartPreviewContext"
import { useAppDispatch } from "app/store"

const CartPreview: FunctionComponent = () => {
  const containerRef = useRef(null)
  const { classes, hideCartPreview } = useContext(CartPreviewContext)
  const dispatch = useAppDispatch()
  const { cartItems, removeFromCart, cartQuantity } = useCart()

  useEffect(() => {
    const handleOutOfBoundsClick = (e: Event) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        hideCartPreview()
      }
    }

    window.addEventListener("mousedown", handleOutOfBoundsClick)

    return () => window.removeEventListener("mousedown", handleOutOfBoundsClick)
  })

  if (cartItems.length < 1) return null

  return (
    <div
      className={`pt-10 transition-opacity ease-in-out duration-200 motion-reduce:transition-none p-2 border border-gray-200 lg:border-gray-100 absolute top-[150%] right-[-1.5rem] lg:right-0 w-[100vw] lg:w-[400px] h-auto max-h-96 overflow-y-scroll z-[500] bg-white rounded shadow ${classes}`}
      ref={containerRef}
    >
      <div className="absolute top-2 right-2" onClick={hideCartPreview}>
        <XIcon className="w-4 h-4 text-gray-400 hover:text-gray-800 cursor-pointer" />
      </div>
      {cartItems.map((cartItem) => (
        <div
          className="w-full p-2 flex bg-gray-100 relative mb-2"
          key={cartItem.docId}
        >
          <div
            className="absolute top-2 bottom-2 right-2 flex items-center"
            onClick={() => dispatch(removeFromCart(cartItem.docId))}
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
        View Cart ({cartQuantity})
      </Link>
    </div>
  )
}

export default CartPreview
