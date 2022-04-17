import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'

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
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">OUR WORK</a>
          </li>
          <li>
            <a href="/">TEAM</a>
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

export default BurgerNav
