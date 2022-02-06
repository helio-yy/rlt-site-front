import Main from 'components/Main'
import Header from 'components/Header'
import Footer from 'components/Footer'

import SeoDescription from 'components/SeoDescription'
import SocialRating from 'components/SocialRating'
import IntroSection from 'components/IntroSection'
import Newsletter from 'components/Newsletter'
import FormSubscribeNew from 'components/FormSubscribeNew'
import Slider from 'components/Slider'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Main />
      <Slider />
      <FormSubscribeNew />
      <Newsletter />
      {/* <IntroSection /> */}
      {/* <SocialRating />
      <SeoDescription />
      <Footer /> */}
    </>
  )
}
