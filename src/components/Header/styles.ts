import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    background-color: ${theme.colors.blueLight1};
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
  `}
`
export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.content};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1.5rem 0.5rem;
  `}

  ${media.lessThan('medium')`
    justify-content: center;
  `}
`

export const MenuDesk = styled.div`
  ${({ theme }) => css`
    height: 3rem;
    display: flex;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    li,
    a {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      margin: 0px 0.5rem;
      padding: 0.5rem 0;
    }
  `}
`
export const myAccount = styled.div`
  padding: 0;
  display: flex;
  align-items: center;

  .btnPromo {
    background-color: transparent;
    padding: 0.4rem 1.3rem;
    font-size: 1.2rem;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 50px;
    color: white;
    border: 1px solid white;
    font-family: inherit;
    cursor: pointer;
  }
`
