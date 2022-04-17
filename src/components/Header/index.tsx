import * as S from './styles'
import Link from 'next/link'
import MediaMatch from 'components/MediaMatch'
import BurgerNav from 'components/BurgerNav'
import Logo from 'components/Logo'
import { ActiveLink } from 'components/ActiveLink'

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <Link href="./">
          <a>
            <Logo />
          </a>
        </Link>

        <BurgerNav />

        <MediaMatch greaterThan="medium">
          <S.MenuDesk>
            <ul>
              <li>
                <ActiveLink href={`/`} activeClassName="active">
                  <a> HOME</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href={`/about`} activeClassName="active">
                  <a> OUR WORK</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href={`/404`} activeClassName="active">
                  <a> TEAM</a>
                </ActiveLink>
              </li>
            </ul>
          </S.MenuDesk>
        </MediaMatch>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
