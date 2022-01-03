import lgLogo from "assets/images/logo-white-lg.jpg"
import { FunctionComponent } from "react"

const FooterLeft: FunctionComponent = () => (
  <div className="p-1 w-full lg:w-1/2">
    <div className="w-full h-full relative">
      <h4 className="uppercase text-gray-600 lg:text-gray-300 text-4xl font-extrabold font-primary lg:pl-6 py-2 lg:border-l-8 border-l-gray-800 mb-6">
        About Aural Records
      </h4>
      <p className="lg:pl-0 lg:pr-16 md:px-10 text-lg text-gray-600 leading-[2.5] z-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat
        tortor velit, et mattis risus aliquam nec. Quisque non tortor odio. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Phasellus ac lacinia lorem.
      </p>
      <div className="absolute w-full h-full left-0 top-0 opacity-10 -z-1 lg:pr-20 flex justify-center items-end">
        <img src={lgLogo} alt="Aural Records" className="max-w-md w-full" />
      </div>
    </div>
  </div>
)

export default FooterLeft
