import { FunctionComponent, useEffect } from "react"
import { useLocation } from "react-router-dom"

// use in app.jsx to take users back to top of the page when a route changes
const ScrollToTop: FunctionComponent = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
