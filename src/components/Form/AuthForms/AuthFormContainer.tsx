import { ReactNode } from "react"

interface FormContainerProps {
  children: ReactNode
  maxW?: string
}

// this container will be used around signup and signin forms
// the maxW prop, if provided, should be a max width tailwind class i.e. max-w-2xl
const FormContainer = ({ children, maxW }: FormContainerProps) => (
  <section className="py-0 lg:py-16 z-[1] relative lg:bg-hero-main bg-cover bg-no-repeat border-y border-gray-200">
    <div className="hidden lg:block bg-black -z-1 backdrop-blur-sm bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
    <div className={`${maxW ? maxW : "max-w-lg"} mx-auto p-10 bg-white`}>
      {children}
    </div>
  </section>
)

export default FormContainer
