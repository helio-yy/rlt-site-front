import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    background-color: ${theme.colors.black};
    ${media.lessThan('medium')`
    padding: ${theme.spacings.xsmall};
    `}
  `}
`
export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    grid-gap: 0.1rem;
    align-items: center;
    background: ${theme.colors.white};
    ${media.lessThan('medium')`
      width: 100%;
      grid-template-columns: 1fr 1fr;
    `}
  `}
`

export const Image = styled.div`
  text-align: center;
  color: white;
  background-color: gold;
  img {
    width: 100%;
    display: block;
  }
`
