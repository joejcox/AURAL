// can be used at the bottom of any form using react hook form
// pass isSubmitting prop through to disabled to disable while it's submitting
// pass react hook form's handleSubmit function to this component via onClick property

import { FunctionComponent, ReactNode } from "react"

interface FormButtonProps {
  children: ReactNode
  onClick: () => void
  disabled: boolean
}

const FormButton: FunctionComponent<FormButtonProps> = ({
  children,
  onClick,
  disabled,
}) => (
  <button
    className="bg-black hover:bg-main-400 w-full py-2 px-4 mt-2 text-white inline-block outline-white border-0"
    type="submit"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
)

export default FormButton
