import Banner from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

const items = [
  {
    title: 'Corpus Christi',
    img: 'https://i.ibb.co/Jz00s2v/Interface-Hero-Create-03.jpg'
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
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
