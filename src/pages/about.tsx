import BannerSlider from 'components/BannerSlider'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MultipleRowsCardSlider from 'components/MultipleRowsCardSlider'
import OurWork from 'components/OurWork'
import React from 'react'

export default function about() {
  return (
    <>
      <Header />
      <BannerSlider />
      <OurWork />
      <MultipleRowsCardSlider />
      <Footer />
    </>
  )
}
