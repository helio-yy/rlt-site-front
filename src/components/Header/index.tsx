import * as S from './styles'
import Link from 'next/link'
import MediaMatch from 'components/MediaMatch'
import CartDropdown from 'components/CartDropdown'
import UserDropdown from 'components/UserDropdown'
import BurgerNav from 'components/BurgerNav'

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <img
          src="https://d2odosjtfeb3gl.cloudfront.net/images/Logo-white-LTR.svg"
          width="150"
        />

        <BurgerNav />

        <MediaMatch greaterThan="medium">
          <S.MenuDesk>
            <ul>
              <li>
                <a href="/">All Inclusive</a>
              </li>
              <li>
                <a href="/">Acomodações</a>
              </li>
              <li>
                <a href="/">Gastronomia</a>
              </li>
              <li>
                <a href="/">Lazer</a>
              </li>
              <li>
                <a href="/">Clube de Praia</a>
              </li>
              <li>
                <a href="/">Sustentabilidade</a>
              </li>
              <li>
                <a href="/">Contato</a>
              </li>
            </ul>
          </S.MenuDesk>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          <S.myAccount>
            <Link href="/" passHref>
              <button>Promoções</button>
            </Link>

            <CartDropdown />
            <UserDropdown />
          </S.myAccount>
        </MediaMatch>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header