import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 15rem;
    height: 5rem;

    svg {
      width: 27rem;
      margin-left: -6rem;
    }
    ${media.lessThan('medium')`
      .circle{
        color:pink;
      }
      .torre{
        color:orange;
      }
      color: red;
      .text {
        color: gold;
      }
    `}
  `,
  large: () => css`
    width: 30rem;
    height: 8rem;
    svg {
      margin-left: -8.8rem;
      margin-top: -1rem;
    }
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 24rem;
      height: 4rem;
      display: flex;
      margin-left:3rem;
      margin-top:0.2rem;
      .circle{
        color:white;
      }
      .torre{
        color:white;
      }

      svg {

        pointer-events: none;
      }
      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
