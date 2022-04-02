import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  title: string
  img: string
}

const Banner = ({ img, title }: BannerProps) => (
  <S.Wrapper>
    <S.Image>
      <img src={img} alt={title} />
    </S.Image>
  </S.Wrapper>
)

export default Banner
