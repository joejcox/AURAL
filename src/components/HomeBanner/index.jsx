import Container from "core/Container"
import bannerLogo from "assets/images/logo-white-lg-hole.png"
import HomeBannerText from "./HomeBannerText"
import ParallaxProvider from "react-scroll-parallax/cjs/components/ParallaxProvider"
import Parallax from "react-scroll-parallax/cjs/components/Parallax"

const HomeBanner = () => {
  return (
    <section className="relative z-40 bg-hero-main py-28 lg:py-40">
      <div className="bg-black -z-1 backdrop-blur-sm bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
      <ParallaxProvider>
        <Container classes="flex flex-col lg:flex-row items-center justify-center lg:items-stretch flex-wrap">
          <Parallax y={[-20, 20]}>
            <img
              src={bannerLogo}
              alt="Aural Logo"
              width="500"
              className="mb-4 lg:mb-0 lg:pr-5"
            />
          </Parallax>
          <Parallax y={[-20, 30]}>
            <HomeBannerText />
          </Parallax>
        </Container>
      </ParallaxProvider>
    </section>
  )
}

export default HomeBanner
