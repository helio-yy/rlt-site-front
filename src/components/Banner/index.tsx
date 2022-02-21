import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  img: string
  // title: string
  // subtitle: string
  // buttonLabel: string
  // buttonLink: string
}

const Banner = ({
  img
}: // title,
// subtitle,
// buttonLabel,
// buttonLink
BannerProps) => (
  <S.Wrapper>
    <S.Image>
      <img src={img} />
    </S.Image>
    {/* <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption> */}
  </S.Wrapper>
)

export default Banner
