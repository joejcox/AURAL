const FormButton = ({ children, onClick, disabled }) => (
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
