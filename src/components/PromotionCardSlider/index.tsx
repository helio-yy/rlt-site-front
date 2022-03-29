import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'

import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded'

import * as S from './styles'
import Button from 'components/Button'
import { Content } from 'components/Content'
import Heading from 'components/Heading'

export type PromotionCardSliderProps = {
  color?: 'blueLight1' | 'darkGray' | 'redLight1'
}
const items = [
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982644528.jpeg',
    price: '1.123'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982523961.jpeg',
    price: '1.221'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982737904.jpeg',
    price: '844'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982775977.jpeg',
    price: '1.774'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982677521.jpeg ',
    price: '1.194'
  }
]
const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        arrows: true,
        slidesToShow: 3.2
        // slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2.3
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,

        vertical: true,
        unslick: true,
        slidesToShow: 20,
        verticalSwiping: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        vertical: true,
        unslick: true,
        slidesToShow: 20,
        verticalSwiping: false
      }
    }
  ],
  nextArrow: <ArrowForwardIosRounded aria-label="Próxima promo" />,
  prevArrow: <ArrowBackIosRounded aria-label="Voltar promo" />
}

const PromotionCardSlider = ({
  color = 'darkGray'
}: PromotionCardSliderProps) => (
  <Content>
    <S.Wrapper color={color}>
      <Heading textPosition="left" color="blueLight1">
        Momentos <span>marcantes</span>... <span>Com</span> ofertas incríveis
      </Heading>

      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  </Content>
)

export default PromotionCardSlider
