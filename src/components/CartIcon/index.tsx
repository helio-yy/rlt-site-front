import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

import * as S from './styles'

const CartIcon = () => (
  <S.Wrapper>
    <S.badge aria-label="Cart Items">5</S.badge>
    <ShoppingCartOutlinedIcon aria-label="Shopping Cart" />
  </S.Wrapper>
)

export default CartIcon
