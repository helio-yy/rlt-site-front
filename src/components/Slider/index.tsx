import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <h1>Slider</h1>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
