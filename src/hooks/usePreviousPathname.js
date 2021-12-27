import { useLocation } from "react-router-dom"

const usePreviousPathname = () => {
  const location = useLocation()

  return { currentPath: location.pathname, prevPath: location.state?.from }
}

export default usePreviousPathname
