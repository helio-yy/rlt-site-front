import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

type textPositionProps = Pick<HeadingProps, 'textPosition'>

export const Wrapper = styled.h2<textPositionProps>`
  ${({ theme, color, textPosition }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};
    text-align: ${textPosition === 'left' ? 'left' : 'right'};

    font-weight: ${theme.font.medium};
    margin: ${theme.spacings.small} 0;
    span {
      font-weight: 500;
    }
    ${media.greaterThan('medium')`
    font-size:${theme.font.sizes.xxlarge};
  `}
  `}
`
