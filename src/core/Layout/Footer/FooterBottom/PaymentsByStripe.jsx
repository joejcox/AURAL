import stripeLogo from "assets/images/StripeLogo.png"
import cardLogos from "assets/images/CardIcons.png"

const PaymentsByStripe = ({ block }) => (
  <div className={`px-5 ${block ? "block" : "absolute -top-20 left-0"}`}>
    <div className="">
      <img src={cardLogos} alt="Card payments logos" />
    </div>
    <span className="font-bold">
      Payments by{" "}
      <img
        src={stripeLogo}
        alt="Stripe Logo"
        className="inline-block -ml-0.5"
      />
    </span>
  </div>
)

export default PaymentsByStripe
