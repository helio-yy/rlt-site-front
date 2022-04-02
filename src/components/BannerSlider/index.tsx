import Banner from 'components/Banner'
import SearchAaccommodationForm from 'components/SearchAaccommodationForm'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

const items = [
  {
    title: 'Corpus Christi',
    img: 'https://s3.sa-east-1.amazonaws.com/cms.resortlatorre.com.br/banners/Banner_Corpus-Christi2022site-demo.jpg'
  }
]

const settings: SliderSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {}
    }
  ]
}

const BannerSlider = () => (
  <S.Wrapper>
    <SearchAaccommodationForm />
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
