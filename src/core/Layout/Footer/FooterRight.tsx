import { FunctionComponent } from "react"

const FooterRight: FunctionComponent = () => {
  return (
    <div className="p-1 w-full lg:w-1/2 bg-main-400 md:bg-opacity-0 mt-10 md:mt-0">
      <div className="w-full h-full">
        <h4 className="mt-10 lg:mt-0 uppercase text-white md:text-gray-600 lg:text-gray-300 text-4xl font-extrabold font-primary lg:pl-6 py-2 lg:border-l-8 border-l-main-400 mb-6">
          Contact Us
        </h4>
        <form onSubmit={(e) => e.preventDefault()} className="md:px-20 lg:px-0">
          <div className="field w-full md:w-1/2 inline-block px-2">
            <input
              type="text"
              name="name"
              className="outline-white bg-gray-100 text-gray-600 w-full p-4"
              placeholder="Name"
            />
          </div>
          <div className="field w-full mt-4 md:mt-0 md:w-1/2 inline-block px-2">
            <input
              type="email"
              name="email"
              className="outline-white text-gray-600 bg-gray-100 w-full p-4"
              placeholder="Email"
            />
          </div>
          <div className="field w-full pt-4 pb-2 px-2">
            <textarea
              className="text-gray-600 text-md p-4 w-full bg-gray-100 outline-white"
              rows={7}
            ></textarea>
          </div>
          <div className="field w-full px-2">
            <button
              type="submit"
              className="bg-black blog py-2 w-full text-white text-center uppercase mb-4 md:mb-0 hover:bg-gray-800 md:hover:bg-main-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FooterRight
