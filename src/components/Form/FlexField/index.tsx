import { FunctionComponent, ReactNode } from "react"

interface FlexFieldProps {
  children: ReactNode
  marginPosition: string
}

// Flex field is set to half width
const FlexField: FunctionComponent<FlexFieldProps> = ({
  children,
  marginPosition,
}) => (
  <div className={`w-full lg:flex-1 lg:w-1/2 mb-4 lg:mb-0 ${marginPosition}`}>
    {children}
  </div>
)

export default FlexField
