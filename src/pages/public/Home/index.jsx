import HomeBanner from "components/HomeBanner"
import { Helmet } from "react-helmet-async"
import screenshot from "assets/images/AURAL_HOME_UNAUTH_USER.png"
import FeaturedProducts from "features/products/FeaturedProducts"
import PreOrderProducts from "features/products/PreOrderProducts"

const Home = () => (
  <>
    <Helmet>
      <title>Aural Records</title>
    </Helmet>
    <HomeBanner />
    <PreOrderProducts theme="light" />
    <FeaturedProducts theme="dark" bgImgClass="bg-carousel" />
    <img className="mx-auto hidden" src={screenshot} alt="Aural Mockup" />
  </>
)

export default Home
