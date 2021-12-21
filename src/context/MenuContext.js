import { useState, createContext } from "react"

export const MenuContext = createContext()

const MenuContextProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenu = () => setMenuIsOpen(true)

  const closeMenu = () => setMenuIsOpen(false)

  const value = {
    menuIsOpen,
    openMenu,
    closeMenu,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export default MenuContextProvider
