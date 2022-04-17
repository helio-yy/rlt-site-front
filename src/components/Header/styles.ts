import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    background-color: ${theme.colors.black};
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
      margin: 0px 1.3rem;
      padding: 0.5rem 0;
      transition: all ease 0.3s;
      &:hover {
        color: ${theme.colors.orangeLight1};
      }
      .active {
        border-bottom: 0.3rem solid ${theme.colors.white};
      }
    }
  `}
`
