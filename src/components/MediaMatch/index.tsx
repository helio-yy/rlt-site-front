import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const MediaMatchModifiers = {
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block`}
  `,

  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block`}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!greaterThan && MediaMatchModifiers.greaterThan(greaterThan)}
    ${!!lessThan && MediaMatchModifiers.lessThan(lessThan)}
  `}
`
