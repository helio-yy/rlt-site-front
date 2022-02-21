import Main from 'components/Main'
import Header from 'components/Header'
import Footer from 'components/Footer'

import SeoDescription from 'components/SeoDescription'
import SocialRating from 'components/SocialRating'
import IntroSection from 'components/IntroSection'
import Newsletter from 'components/Newsletter'
import FormSubscribeNew from 'components/FormSubscribeNew'
import GameCardSlider from 'components/PromotionCardSlider'
import HeaderStick from 'components/HeaderStick'
import BannerSlider from 'components/BannerSlider'

export default function Home() {
  return (
    <>
      <HeaderStick />
      <Header />
      {/* <BannerSlider /> */}
      {/* <Main /> */}
      {/* <GameCardSlider /> */}
      <Newsletter />
      <IntroSection />
      <FormSubscribeNew />

      <SocialRating />
      {/* <SeoDescription /> */}
      <Footer />
    </>
  )
}
