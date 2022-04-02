import Header from 'components/Header'
import IntroSection from 'components/IntroSection'
import FormSubscribeNew from 'components/FormSubscribeNew'
import HeaderStick from 'components/HeaderStick'
import BannerSlider from 'components/BannerSlider'
import PromotionCardSlider from 'components/PromotionCardSlider'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <>
      <HeaderStick />
      <Header />
      <BannerSlider />
      <PromotionCardSlider />
      <IntroSection />
      <FormSubscribeNew />
      <Footer />
    </>
  )
}
