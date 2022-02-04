import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/TextField/styles'
import * as buttonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 90rem;
    margin: ${theme.spacings.small} auto;

    ${TextFieldStyles.Wrapper} {
      width: 38%;
      display: inline-block;
      margin: 0 1rem;
    }

    ${media.lessThan('medium')`
      text-align: center;
      ${TextFieldStyles.Wrapper} {
        width: 100%;
        margin: 0 ;

      }
      ${buttonStyles.Wrapper} {
        display:flex;
        margin: 1rem auto;
      }
    `}
  `}
`

export const SubscribeTitle = styled.section`
  ${({ theme }) => css`
    max-width: 40rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    img {
      margin: 1rem;
    }
    span {
      display: flex;
      flex-direction: column;
    }
    ${media.lessThan('medium')`
    h2{
      font-size: 2rem;
    }
  `}
  `}
`
