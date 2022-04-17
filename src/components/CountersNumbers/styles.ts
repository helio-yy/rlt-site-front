import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    background-color: ${theme.colors.black};
  `}
`
export const Content = styled.section`
  ${({ theme }) => css`
    max-width: 90rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: ${theme.spacings.medium};
    border-radius: 2rem;
    grid-gap: 2rem;
    align-items: center;
    background: ${theme.colors.darkGray};
    position: relative;
    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
      grid-template-columns: 1fr;
      margin: ${theme.spacings.xsmall};
    `}
    ${media.lessThan('large')`
      max-width: 80rem;
      padding: ${theme.spacings.xxsmall};
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 0 ${theme.spacings.large};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    h1 {
      font-size: 4rem;
      margin-bottom: ${theme.spacings.xxsmall};
    }
    p {
      margin-bottom: ${theme.spacings.xsmall};
    }

    ${media.lessThan('large')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`
