import Container from "core/Container"
import Section from "core/Section"
import CartList from "components/Cart/CartList"
import CartTotal from "components/Cart/CartTotal"
import CartTotalPrice from "./CartTotal/CartTotalPrice"
import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-3xl text-gray-600">Your Cart</h1>
        </Container>
      </Section>
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
    </>
  )
}

export default Cart
