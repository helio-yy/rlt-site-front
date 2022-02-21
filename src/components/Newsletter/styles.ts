import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    background: #ccc;
  `}
`
export const Content = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.content};
    padding: ${theme.spacings.medium} 0;
    display: grid;
    margin: 0 auto;
  `}
`
