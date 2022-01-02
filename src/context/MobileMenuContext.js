import { createContext, useState, useEffect } from "react"

export const MobileMenuContext = createContext()

const MobileMenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // when menu is open, hide the body overflow.
    // we do not need to trap focus since it should only be used on mobile and tablet devices where no keyboard control is used
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
  }, [isOpen])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const value = {
    isOpen,
    toggleOpen,
  }

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export default MobileMenuContextProvider
