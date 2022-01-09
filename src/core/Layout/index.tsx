import ScrollToTop from "core/ScrollToTop"
import Header from "core/Layout/Header"
import Footer from "core/Layout/Footer"
import { FunctionComponent, ReactNode } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51KFniXLToWdo8BIrRzNNjMiBHdWrdV7YqF1ORy9eVQc8ffT1b6PfsYtxgONhW9fVIci2A1pUh1PsPAOXwmceni1P008qaIlaVL"
)

const Layout: FunctionComponent<ReactNode> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-primary">
      <ScrollToTop />
      <Header />
      <Elements stripe={stripePromise}>{children}</Elements>
      <Footer />
    </div>
  )
}
export default Layout
