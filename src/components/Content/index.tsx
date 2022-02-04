import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.content};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
