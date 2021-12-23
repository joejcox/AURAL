import { useState } from "react"

const useToggleOpen = ({ initialState }) => {
  const [isOpen, setIsOpen] = useState(initialState || false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, toggleOpen }
}

export default useToggleOpen
