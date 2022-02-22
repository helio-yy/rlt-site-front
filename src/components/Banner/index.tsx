import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  img: string
}

const Banner = ({ img }: BannerProps) => (
  <S.Wrapper>
    <S.Image>
      <img src={img} />
    </S.Image>
  </S.Wrapper>
)

export default Banner
