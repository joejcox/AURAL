import React, { FunctionComponent } from "react"

type ContextClasses = string

interface CartContext {
  classes: ContextClasses
  showCartPreview: () => void
  hideCartPreview: () => void
}

export const CartPreviewContext = React.createContext<CartContext>(null)

const initialClasses = "opacity-0 translate-y-4 pointer-events-none"

const CartPreviewContextProvider: FunctionComponent = ({ children }) => {
  // tailwindcss classes for the CartPreview component, default should have no opacity or pointer events
  const [classes, setClasses] = React.useState<ContextClasses>(initialClasses)

  // when we want to show the cart we give it tailwind opacity and pointer event classes to allow animation
  const showCartPreview = () => {
    setClasses("opacity-1 pointer-events-auto translate-y-0")
  }

  // cart preview is dismissed by the user and set back to default tailwind classes
  const hideCartPreview = () => {
    setClasses(initialClasses)
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
