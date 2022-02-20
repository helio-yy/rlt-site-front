import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 8rem;
    height: auto;
    svg {
      width: 50rem;
      pointer-events: none;
    }
  `,
  large: () => css`
    width: auto;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: auto;
      svg {
        height: 3rem;
        pointer-events: none;
      }
      .text {
        /* display: none; */
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  background: red;
  display: block;
  display: flex;

  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
