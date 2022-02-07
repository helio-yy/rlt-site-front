import * as S from './styles'

export type GameCardProps = {
  img: string
  title: string
  price: string
}

const GameCard = ({ title, developer, img, price }: GameCardProps) => (
  <S.Wrapper>
    <div className="ImageBox">
      <a className="flip" href="#">
        <span className="front">
          <img src={img} alt={title} />
        </span>

        <span className="back">
          <h1>Carnaval 2022</h1>
          <p>Restaure suas emoções</p>
        </span>
      </a>
    </div>

    <div className="Content">
      <S.Info>
        <h2>{title}</h2>
      </S.Info>
      <S.BuyBox>
        <span>Rs</span>
        <h1>{price}</h1>
      </S.BuyBox>
    </div>
    <S.ProductVisits>Visto 65424 vezes nesta semana </S.ProductVisits>
  </S.Wrapper>
)

export default GameCard
