import { MinusIcon, PlusIcon } from "@heroicons/react/solid"
import useCart from "features/cart/useCart"
import { useAppDispatch } from "app/store"
import { CartItemProps } from "features/cart/CartItem"
import { FunctionComponent } from "react"

const QuantityControl: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const { increaseQuantity, decreaseQuantity } = useCart()

  return (
    <div className="absolute bottom-0 right-0 flex items-stretch bg-gray-100">
      <button
        className="bg-black px-4 active:bg-gray-800"
        onClick={() => dispatch(decreaseQuantity(product.docId))}
      >
        <MinusIcon className="w-4 h-full text-white" />
      </button>

      <span className="inline-block py-1 px-4 text-md text-gray800">
        {product.quantity}
      </span>

      <button
        className="bg-black px-4 active:bg-gray-800"
        onClick={() => dispatch(increaseQuantity(product.docId))}
      >
        <PlusIcon className="w-4 h-full text-white" />
      </button>
    </div>
  )
}

export default QuantityControl
