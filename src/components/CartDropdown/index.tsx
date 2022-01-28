import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import * as S from './styles'

const CartDropdown = () => (
  <S.Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown