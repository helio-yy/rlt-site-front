import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

const CartList = () => (
  <S.Wrapper>
    <p>Você tem 1 item(s) em seu carrinho</p>

    <S.Thunb>
      <img src="https://d2wiap78u3ex1b.cloudfront.net/Imagens/Acomodacoes/156753628474.jpg" />
      <S.Infor>
        <h5>Acomodação - Standard</h5>
        <h6>R$ 5.596,00</h6>
      </S.Infor>
    </S.Thunb>

    <S.Footer>
      <S.SubTotal>Subtotal: R$ 5.596,00</S.SubTotal>
      <Link href="/">
        <Button size="small" textColor="white">
          Finalizar pedido
        </Button>
      </Link>
    </S.Footer>
  </S.Wrapper>
)

export default CartList
