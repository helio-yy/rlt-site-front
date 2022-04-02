import * as S from './styles'

export type PromotionCardProps = {
  img: string
  title: string
  description: string
  price: string
}

const PromotionCard = ({
  title,
  description,
  img,
  price
}: PromotionCardProps) => (
  <S.Wrapper>
    <div className="ImageBox">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={img} alt={title} />
          </div>
          <div className="flip-card-back">
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="Content">
      <S.Info>
        <h2>Diárias a partir de</h2>
      </S.Info>
      <S.BuyBox>
        <span>Rs</span>
        <h1>{price}</h1>
      </S.BuyBox>
    </div>
    <S.ProductVisits>Visto 65424 vezes nesta semana </S.ProductVisits>
  </S.Wrapper>
)

export default PromotionCard
