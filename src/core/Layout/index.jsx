import MenuContextProvider from "context/MenuContext"
import Header from "core/Layout/Header"

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white font-primary">
    <MenuContextProvider>
      <Header />
    </MenuContextProvider>
    {children}
  </div>
)

export default Layout
