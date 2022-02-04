import Main from 'components/Main'
import Header from 'components/Header'
import Slide from 'components/Slide'
import Footer from 'components/Footer'

import SeoDescription from 'components/SeoDescription'
import SocialRating from 'components/SocialRating'
import IntroSection from 'components/IntroSection'
import Newsletter from 'components/Newsletter'
import FormSubscribeNew from 'components/FormSubscribeNew'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Slide />
      <Main />

      <FormSubscribeNew />
      {/* <IntroSection /> */}
      {/* <SocialRating />
      <SeoDescription />
      <Footer /> */}
    </>
  )
}
