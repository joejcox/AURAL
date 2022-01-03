import CartItem from "features/cart/CartItem"
import useCart from "features/cart/useCart"
import { FunctionComponent } from "react"

interface ProductPrice {
  vinyl: string
  cd: string
  mp3: string
}

interface CartItemProduct {
  docId: string
  artist: string
  album_title: string
  formats: string[]
  quantity: number
  artwork: string
  price: ProductPrice
}

const CartList: FunctionComponent = () => {
  const { cartItems } = useCart()

  return (
    <div className="w-full lg:w-2/3 flex-2 lg:mr-2">
      {cartItems.map((product: CartItemProduct) => (
        <CartItem product={product} key={product.docId} />
      ))}
    </div>
  )
}

export default CartList
