import { FunctionComponent, ReactNode } from "react"

// this container is used when you want to use Flex Fields so form inputs can sit in the same row
// the number of FlexFields used within this container should be two, no more, no less
// if 3 column row is required, a new FlexField will need to be added
// if only one field is required, use the Field component on its own instead
const FlexFieldContainer: FunctionComponent<ReactNode> = ({ children }) => (
  <div className="flex flex-wrap mb-0 lg:mb-8">{children}</div>
)

export default FlexFieldContainer
