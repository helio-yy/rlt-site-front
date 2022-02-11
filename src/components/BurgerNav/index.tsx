import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import MyLocationIcon from '@material-ui/icons/MyLocation'

import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'

import * as S from './styles'

const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MediaMatch lessThan="medium">
        <S.BurgerIcon onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.BurgerIcon>
      </MediaMatch>

      <S.BurgerNav aria-hidden={!isOpen} isOpen={isOpen}>
        <S.CloseWrapper>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        </S.CloseWrapper>
        <ul>
          <li>
            <a href="/">ENTRAR</a>
          </li>
          <li>
            <a href="/">CADASTRAR</a>
          </li>

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
          <li>
            <a href="/">
              CHECK-IN <MyLocationIcon />
            </a>
          </li>
          <li>
            <a href="/">
              FIDELIDADE <MyLocationIcon />
            </a>
          </li>
          <li>
            <a href="/">
              PET FRIENDLY <MyLocationIcon />
            </a>
          </li>
          <li>
            <a href="/">
              BLOG <MyLocationIcon />
            </a>
          </li>
          <li>
            <S.InforPhone>
              <h2>4020 - 4017</h2>
              <p>Preço de ligação local</p>
            </S.InforPhone>
          </li>
        </ul>
      </S.BurgerNav>

      <S.Overlay
        aria-hidden={!isOpen}
        isOpen={isOpen}
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}

// <MediaMatch lessThan="medium">
//   <S.Wrapper>
//     <p>Você tem 1 item(s) em seu carrinho</p>
//   </S.Wrapper>
// </MediaMatch>

export default BurgerNav
