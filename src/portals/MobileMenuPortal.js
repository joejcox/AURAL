import ReactDOM from "react-dom"
import { useEffect, useMemo } from "react"

const MobileMenuPortal = ({ children }) => {
  const menuContainer = useMemo(() => document.createElement("div"), [])

  useEffect(() => {
    const body = document.body

    menuContainer.setAttribute("id", "menu-portal")

    body.appendChild(menuContainer)
    body.classList.add("overflow-hidden")

    return () => {
      body.removeChild(menuContainer)
      body.classList.remove("overflow-hidden")
    }
  }, [menuContainer])
  return ReactDOM.createPortal(children, menuContainer)
}

export default MobileMenuPortal
