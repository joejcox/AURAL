const FormContainer = ({ children }) => (
  <section className="py-0 lg:py-16 z-[1] relative lg:bg-hero-main border-y border-gray-200 mb-16">
    <div className="hidden lg:block bg-black -z-1 backdrop-blur-sm bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
    <div className="mx-auto max-w-lg p-10 bg-white">{children}</div>
  </section>
)

export default FormContainer
