import * as S from './styles'

export type MultipleRowsCardProps = {
  img: string
  nome: string
  cargo: string
}

const MultipleRowsCard = ({ img, nome }: MultipleRowsCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={nome} />
    </S.ImageBox>
  </S.Wrapper>
)

export default MultipleRowsCard
