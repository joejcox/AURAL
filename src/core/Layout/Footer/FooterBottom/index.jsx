import Logo from "core/Logo"
import PaymentsByStripe from "./PaymentsByStripe"

const FooterBottom = () => (
  <div className="bg-black p-4 mt-40">
    <div className="mx-auto max-w-6xl px-5 flex justify-between items-center relative">
      <span className="text-gray-300 uppercase text-sm">
        Company No 50184268
      </span>
      <div className="-mt-12 pr-2">
        <Logo />
      </div>
      <PaymentsByStripe />
    </div>
  </div>
)

export default FooterBottom
