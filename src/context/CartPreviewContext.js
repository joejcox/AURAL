import { createContext, useState } from "react"

export const CartPreviewContext = createContext()

const CartPreviewContextProvider = ({ children }) => {
  // tailwindcss classes for the CartPreview component, default should have no opacity or pointer events
  const [classes, setClasses] = useState("opacity-0 pointer-events-none")

  // when we want to show the cart we give it tailwind opacity and pointer event classes to allow animation
  const showCartPreview = () => {
    setClasses("opacity-1 pointer-events-auto")
  }

  // cart preview is dismissed by the user and set back to default tailwind classes
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
