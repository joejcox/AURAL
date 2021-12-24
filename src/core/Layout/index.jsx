import ScrollToTop from "core/ScrollToTop"
import Header from "core/Layout/Header"
import Footer from "core/Layout/Footer"

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white font-primary">
    <ScrollToTop />
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
