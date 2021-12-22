import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"
import FooterBottom from "core/Layout/Footer/FooterBottom"

const Footer = () => {
  return (
    <footer className="pt-16 bg-white z-20">
      <div className="container max-w-6xl px-5 mx-auto flex flex-wrap text-center lg:text-left">
        <FooterLeft />
        <FooterRight />
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
