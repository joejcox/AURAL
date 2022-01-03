import { FunctionComponent, ReactNode } from "react"

type AccountContentProps = {
  children: ReactNode
}

const AccountContent: FunctionComponent<AccountContentProps> = ({
  children,
}) => <article className="text-xl w-full lg:w-3/4 lg:p-4">{children}</article>

export default AccountContent
