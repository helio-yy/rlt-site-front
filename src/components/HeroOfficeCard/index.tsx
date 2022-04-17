import * as S from './styles'

export type HeroOfficeProps = {
  img: string
  nome: string
}

const HeroOfficeCard = ({ img, nome }: HeroOfficeProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={nome} />
    </S.ImageBox>
  </S.Wrapper>
)

export default HeroOfficeCard
