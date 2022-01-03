import ReactDOM from "react-dom"
import { FunctionComponent, ReactNode, useEffect, useMemo } from "react"

const MobileMenuPortal: FunctionComponent<ReactNode> = ({ children }) => {
  const menuContainer = useMemo(() => document.createElement("div"), [])

  useEffect(() => {
    const body = document.body

    menuContainer.classList.add("mobile-menu")

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
