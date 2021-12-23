import { useEffect, useState } from "react"

const useToggleOpen = ({ initialState }) => {
  const [isOpen, setIsOpen] = useState(initialState || false)

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
  }, [isOpen])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, toggleOpen }
}

export default useToggleOpen
