import BurgerNav from 'components/BurgerNav'
import Button from 'components/Button'
import CartIcon from 'components/CartIcon'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as S from './styles'

export const HeaderStick = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <MediaMatch lessThan="medium">
      <S.Header className={`${isSticky ? 'sticky' : ''}`}>
        <S.Wrapper>
          {/* <CartIcon /> */}
          <Logo color="white" hideOnMobile={true} />
          <S.BtnPromo>
            <Link href="/routs">
              <a>
                <Button size="small" backgroundColor="white">
                  PROMOÇÕES
                </Button>
              </a>
            </Link>
          </S.BtnPromo>
          <BurgerNav />
        </S.Wrapper>
      </S.Header>
    </MediaMatch>
  )
}

export default HeaderStick
