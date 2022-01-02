import Container from "core/Container"
import bannerLogo from "assets/images/logo-white-lg-hole.png"
import HomeBannerText from "./HomeBannerText"

// banner for the Home view - move as a child of the Home view folder?
// requires HomeBannerText component

const HomeBanner = () => {
  return (
    <section className="relative z-40 bg-hero-main bg-no-repeat bg-cover py-28 lg:py-40">
      <div className="bg-black -z-1 backdrop-blur-sm bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>

      <Container classes="flex flex-col lg:flex-row items-center justify-center lg:items-stretch flex-wrap">
        <img
          src={bannerLogo}
          alt="Aural Logo"
          width="500"
          className="mb-4 lg:mb-0 lg:pr-5"
        />
        <HomeBannerText />
      </Container>
    </section>
  )
}

export default HomeBanner
