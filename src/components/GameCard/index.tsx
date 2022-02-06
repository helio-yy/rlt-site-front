import Button from 'components/Button'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({ title, developer, img, price }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button">favorite </S.FavButton>
      <S.BuyBox>
        <S.Title>{price}</S.Title>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
