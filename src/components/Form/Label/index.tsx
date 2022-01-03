import { FunctionComponent, ReactNode } from "react"

interface LabelProps {
  children: ReactNode
  htmlFor: string
}

const Label: FunctionComponent<LabelProps> = ({ children, htmlFor }) => (
  <label className="text-sm text-gray-600 block mb-2 pl-2" htmlFor={htmlFor}>
    {children}
  </label>
)

export default Label
