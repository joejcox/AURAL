import HomeBanner from "components/HomeBanner"
import { Helmet } from "react-helmet-async"
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
  </>
)

export default Home
