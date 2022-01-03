import Container from "core/Container"
import Section from "core/Section"
import CartList from "features/cart/CartList"
import CartTotal from "features/cart/CartTotal"
import CartTotalPrice from "features/cart/CartTotal/CartTotalPrice"
import { Link } from "react-router-dom"
import useCart from "features/cart/useCart"
import ButtonLink from "core/ButtonLink"
import { Helmet } from "react-helmet-async"
import { FunctionComponent } from "react"

const Cart: FunctionComponent = () => {
  const { cartItems, cartQuantity } = useCart()

  return (
    <>
      <Helmet>
        <title>
          Cart {cartQuantity > 0 ? `(${cartQuantity})` : ""} | Aural Records
        </title>
      </Helmet>
      <Section>
        <Container>
          <h1 className="text-3xl text-gray-600 text-center lg:text-left">
            Your Cart{" "}
            {cartQuantity > 0
              ? cartQuantity === 1
                ? `(${cartQuantity} item)`
                : `(${cartQuantity} items)`
              : ""}
          </h1>
        </Container>
      </Section>
      {cartItems.length > 0 ? (
        <section className="bg-gray-100 py-6 mb-16">
          <Container classes="flex flex-wrap items-start">
            <CartList />
            <CartTotal />
          </Container>
          <Container classes="hidden lg:block">
            <div className="flex justify-between w-full lg:w-2/3 mt-4">
              <CartTotalPrice />
              <Link
                to="/checkout"
                className="bg-black hover:bg-gray-800 text-white uppercase font-extrabold font-primary text-lg inline-flex items-center px-4 py-2"
              >
                Checkout
              </Link>
            </div>
          </Container>
        </section>
      ) : (
        <section className="bg-gray-100 py-16 mb-16">
          <Container classes="text-center lg:text-left">
            <h2 className="text-xl text-gray-800 mb-6">Your cart is empty</h2>
            <ButtonLink path="/shop">Shop Now</ButtonLink>
          </Container>
        </section>
      )}
    </>
  )
}

export default Cart
