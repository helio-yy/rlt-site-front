// import GameCard from 'components/GameCard'
import TeamCard from 'components/TeamCard'
import Slider, { SliderSettings } from 'components/Slider'

import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded'

import * as S from './styles'
import { Content } from 'components/Content'

const items = [
  {
    img: 'https://i.ibb.co/DbyRbGx/bg-carrossel.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/DbyRbGx/bg-carrossel.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/DbyRbGx/bg-carrossel.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/DbyRbGx/bg-carrossel.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/DbyRbGx/bg-carrossel.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/DbyRbGx/bg-carrossel.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  },
  {
    img: 'https://i.ibb.co/DbyRbGx/bg-carrossel.png',
    nome: 'Nome completo',
    cargo: 'Cargo'
  }
]
const settings: SliderSettings = {
  slidesToShow: 5,
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
  nextArrow: <ArrowForwardIosRounded aria-label="Próxima " />,
  prevArrow: <ArrowBackIosRounded aria-label="Voltar " />
}

const TeamCardSlider = () => (
  <Content>
    <S.Wrapper>
      <h1>TEAM</h1>

      <Slider settings={settings}>
        {items.map((item, index) => (
          <TeamCard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  </Content>
)

export default TeamCardSlider
