import { createContext, useState } from "react"

export const CartPreviewContext = createContext()

const CartPreviewContextProvider = ({ children }) => {
  const [classes, setClasses] = useState("opacity-0 pointer-events-none")

  const showCartPreview = () => {
    setClasses("opacity-1 pointer-events-auto")
  }

  const hideCartPreview = () => {
    setClasses("opacity-0 pointer-events-none")
  }

  const value = {
    classes,
    showCartPreview,
    hideCartPreview,
  }

  return (
    <CartPreviewContext.Provider value={value}>
      {children}
    </CartPreviewContext.Provider>
  )
}

export default CartPreviewContextProvider
