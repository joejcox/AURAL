import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FunctionComponent,
} from "react"

interface Props {
  children: ReactNode
}

interface MenuContext {
  isOpen: boolean
  toggleOpen: () => void
}

export const MobileMenuContext = createContext<MenuContext>(null)

const MobileMenuContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
