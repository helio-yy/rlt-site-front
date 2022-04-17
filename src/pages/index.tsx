import Header from 'components/Header'
import TeamCardSlider from 'components/TeamCardSlider'
import Footer from 'components/Footer'
import IntroSection from 'components/IntroSection'
import ThunbImages from 'components/ThunbImages'
import SectionHeroOffice from 'components/SectionHeroOffice'

export default function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <ThunbImages />
      <TeamCardSlider />
      <SectionHeroOffice />
      <Footer />
    </>
  )
}
