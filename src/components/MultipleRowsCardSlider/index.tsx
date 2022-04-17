// import GameCard from 'components/GameCard'
import MultipleRowsCard from 'components/MultipleRowsCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'
import { Content } from 'components/Content'

export type TeamCardSliderProps = {
  color?: 'blueLight1' | 'darkGray' | 'redLight1'
}
const items = [
  {
    img: 'https://i.ibb.co/Vvs2FJj/red01.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/XLMfBxN/red02.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/c2gmJhD/red03.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/nC7j8WX/red04.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/GkbpwRg/red05.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/3Wtg0MD/red06.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/Vvs2FJj/red01.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/XLMfBxN/red02.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/c2gmJhD/red03.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/nC7j8WX/red04.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/GkbpwRg/red05.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/3Wtg0MD/red06.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  }
]
const settings: SliderSettings = {
  slidesToShow: 3,
  infinite: false,
  lazyLoad: 'ondemand',
  rows: 2,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        arrows: true
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
        slidesToShow: 20,
        verticalSwiping: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        vertical: true,
        slidesToShow: 20,
        verticalSwiping: false
      }
    }
  ],
  nextArrow: <img src="https://svgshare.com/i/gKu.svg" aria-label="Próxima" />,
  prevArrow: <img src="https://svgshare.com/i/gLN.svg" aria-label="Voltar" />
}

const MultipleRowsCardSlider = ({
  color = 'darkGray'
}: TeamCardSliderProps) => (
  <Content>
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <MultipleRowsCard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  </Content>
)

export default MultipleRowsCardSlider
