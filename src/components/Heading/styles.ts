import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.medium};
    span {
      font-weight: 500;
    }
    ${media.greaterThan('medium')`
    font-size:${theme.font.sizes.xxlarge};
  `}
  `}
`
