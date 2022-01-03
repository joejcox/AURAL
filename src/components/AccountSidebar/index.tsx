import { FunctionComponent } from "react"
import { Link } from "react-router-dom"

const AccountSidebar: FunctionComponent = () => (
  <aside className="w-full lg:w-1/4 bg-gray-100 p-4 mt-4 lg:mt-0 order-2">
    <h2 className="text-2xl text-gray-800 font-primary mb-4">Account</h2>
    <div className="mb-2">
      <Link
        className="inline-block border-b border-gray-200 hover:border-main-400"
        to="/account"
      >
        Account Overview
      </Link>
    </div>
    <div className="mb-2">
      <Link
        className="inline-block border-b border-gray-200 hover:border-main-400"
        to="/wishlist"
      >
        Your Wishlist
      </Link>
    </div>
    <div className="mb-2">
      <Link
        className="inline-block border-b border-gray-200 hover:border-main-400"
        to="/account/orders"
      >
        Your Orders
      </Link>
    </div>
    <div className="mb-2">
      <Link
        className="inline-block border-b border-gray-200 hover:border-main-400"
        to="/account/settings"
      >
        Account Settings
      </Link>
    </div>
  </aside>
)

export default AccountSidebar
