import HomeBanner from "components/HomeBanner"
import { Helmet } from "react-helmet-async"
import FeaturedProducts from "features/products/FeaturedProducts"
import PreOrderProducts from "features/products/PreOrderProducts"
import Spacer from "components/Spacer"
// import useAuth from "features/user/useAuth"

const Home = () => {
  // const { signIn, logout } = useAuth()

  return (
    <>
      <Helmet>
        <title>Aural Records</title>
      </Helmet>
      <HomeBanner />
      {/* <button onClick={() => signIn("", "")}>Sign In</button>
      <button onClick={logout}>Sign Out</button> */}
      <PreOrderProducts theme="light" />
      <FeaturedProducts theme="dark" bgImgClass="bg-carousel" />
      <Spacer />
    </>
  )
}

export default Home
