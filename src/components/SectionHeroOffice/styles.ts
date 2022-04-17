import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    background-color: ${theme.colors.black};
    margin-top: ${theme.spacings.xxlarge};
    ${media.lessThan('medium')`
      margin:0;
    `}
    h1 {
      text-align: center;
      color: ${theme.colors.white};
    }
  `}
`
export const Content = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.content};
    margin: ${theme.spacings.xxlarge} auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    padding: 0 ${theme.spacings.medium};
    margin-top:2rem;
    justify-content: center;
    `}
    ${media.lessThan('large')`
    padding: 0 ${theme.spacings.medium};
    `}
  `}
`
export const Column = styled.div`
  ${({ theme }) => css`
    padding: 0;
    color: ${theme.colors.white};
    display: flex;
    justify-content: end;
    p {
      line-height: 1.6;
      ${media.lessThan('medium')`
      text-align: center;
      padding: 0 ${theme.spacings.medium};
      `}
    }
  `}
`
