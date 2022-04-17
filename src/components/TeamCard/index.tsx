import * as S from './styles'

export type TeamCardProps = {
  img: string
  nome: string
  cargo: string
}

const TeamCard = ({ img, nome, cargo }: TeamCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={nome} />
    </S.ImageBox>
    <S.Content>
      <h1>{nome}</h1>
      <p>{cargo}</p>
    </S.Content>
  </S.Wrapper>
)

export default TeamCard
