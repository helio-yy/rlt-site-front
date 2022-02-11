import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'

import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded'

import * as S from './styles'
import Button from 'components/Button'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'blueLight1' | 'darkGray' | 'redLight1'
}

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
        slidesToShow: 2.2
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
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowForwardIosRounded aria-label="Próxima promo" />,
  prevArrow: <ArrowBackIosRounded aria-label="Voltar promo" />
}

const GameCardSlider = ({ items, color = 'darkGray' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items?.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
