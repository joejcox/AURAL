import ScrollToTop from "core/ScrollToTop"
import Header from "core/Layout/Header"
import Footer from "core/Layout/Footer"
import { FunctionComponent, ReactNode } from "react"

const Layout: FunctionComponent<ReactNode> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white font-primary">
    <ScrollToTop />
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
