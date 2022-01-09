import Container from "core/Container"
import Section from "core/Section"
import CartList from "features/cart/CartList"
import CartTotal from "features/cart/CartTotal"
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
          <h1 className="payments-title">
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
        <section className="section-grey">
          <Container classes="flex flex-wrap items-start">
            <CartList />
            <CartTotal />
          </Container>
        </section>
      ) : (
        <section className="section-grey">
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
