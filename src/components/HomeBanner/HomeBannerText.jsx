import ButtonLink from "core/ButtonLink"

const HomeBannerText = () => (
  <div className="w-96 flex flex-col justify-center items-center lg:items-start">
    <h1 className="text-center lg:text-left text-white font-bold uppercase text-6xl leading-xl">
      50% off new releases
    </h1>
    <ButtonLink path="/" classes="block w-60 mt-8 lg:mt-2 text-center">
      Shop Now
    </ButtonLink>
  </div>
)

export default HomeBannerText
