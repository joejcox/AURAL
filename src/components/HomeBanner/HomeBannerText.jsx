import ButtonLink from "core/ButtonLink"

const HomeBannerText = () => (
  <div className="w-full max-w-full lg:w-96 flex flex-col justify-center items-center lg:items-start">
    <h1 className="text-center lg:text-left text-white font-bold uppercase text-4xl sm:text-6xl leading-xl">
      50% off new releases
    </h1>
    <ButtonLink
      path="/"
      classes="block w-full max-w-sm sm:w-60 mt-8 lg:mt-2 text-center"
    >
      Shop Now
    </ButtonLink>
  </div>
)

export default HomeBannerText
