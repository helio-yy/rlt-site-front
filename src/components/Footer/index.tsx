import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LocalPhone from '@material-ui/icons/LocalPhone'
import Email from '@material-ui/icons/Email'

import { Content } from 'components/Content'
import * as S from './styles'

const Footer = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <S.Footer>
      <Content>
        <S.Wrapper>
          {showButton && (
            <button onClick={scrollToTop} className="back-to-top">
              <img src="https://i.ibb.co/S7s1F3p/img-Scroll-Top.png" />
            </button>
          )}
          <span>
            <h5>
              <Email />
              email@herobase
            </h5>
            <h5>
              <LocalPhone />
              +55 DDD 9 9999-9999
            </h5>
          </span>

          <h5>© 2022 Hero Creations. All rights reserved</h5>

          <S.Social>
            <Link href="/">
              <a>
                <YouTubeIcon />
              </a>
            </Link>
            <Link href="/">
              <a>
                <InstagramIcon />
              </a>
            </Link>
            <Link href="/">
              <a>
                <WhatsAppIcon />
              </a>
            </Link>
            <Link href="/">
              <a>
                <TwitterIcon />
              </a>
            </Link>
          </S.Social>
        </S.Wrapper>
      </Content>
    </S.Footer>
  )
}

export default Footer
