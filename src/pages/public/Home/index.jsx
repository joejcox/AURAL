import HomeBanner from "components/HomeBanner"
import { Helmet } from "react-helmet-async"
import FeaturedProducts from "components/Products/FeaturedProducts"
import PreOrderProducts from "components/Products/PreOrderProducts"
import Spacer from "components/Spacer"

const Home = () => (
  <>
    <Helmet>
      <title>Aural Records</title>
    </Helmet>
    <HomeBanner />
    <PreOrderProducts theme="light" />
    <FeaturedProducts theme="dark" bgImgClass="bg-carousel" />
    <Spacer />
  </>
)

export default Home
