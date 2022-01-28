import Link from 'next/link'
import React from 'react'

import * as S from './styles'

const SocialRating = () => (
  <S.Section>
    <S.Wrapper>
      <S.Logos>
        <Link href="/">
          <a>
            <img src="https://s3.sa-east-1.amazonaws.com/assets.resortlatorre.com.br/images/Selo+Moss+LTR+21.jpeg" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="https://d2odosjtfeb3gl.cloudfront.net/images/icones/social-proof/great-place-to-work-2021.png" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="https://d2odosjtfeb3gl.cloudfront.net/images/icones/social-proof/icon-travelers-choice.svg" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="https://d2odosjtfeb3gl.cloudfront.net/images/icones/social-proof/icon-tripadvisor.svg" />
            <img src="https://d2odosjtfeb3gl.cloudfront.net/images/icones/social-proof/icon-rating-circle.png" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="https://d2odosjtfeb3gl.cloudfront.net/images/icones/social-proof/icon-booking.svg" />
            <img src="https://d2odosjtfeb3gl.cloudfront.net/images/icones/social-proof/icon-rating-star.png" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="https://d2odosjtfeb3gl.cloudfront.net/images/icones/social-proof/icon-google.svg" />
            <img src="https://d2odosjtfeb3gl.cloudfront.net/images/icones/social-proof/icon-rating-star.png" />
          </a>
        </Link>
      </S.Logos>

      <S.Widgets>Widget Trip Advisor</S.Widgets>
    </S.Wrapper>
  </S.Section>
)

export default SocialRating
