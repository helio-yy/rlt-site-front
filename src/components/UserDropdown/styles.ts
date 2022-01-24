import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.blueLight1};
    padding: 0.5rem 0.8rem;
    border-radius: 25px;
    margin-left: 2rem;
    svg {
      font-size: 1.7rem;
    }
  `}
`
export const Nav = styled.div`
  ${({ theme }) => css`
    width: 15rem;
    display: flex;
    flex-direction: column;

    a:nth-child(3) {
      border-top: 1px solid ${theme.colors.lightGray};
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    text-transform: uppercase;
    margin: 2px;
    justify-content: end;
    font-size: 1.2rem;
    transition: all 0.1s ease-in;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.darkGray};
    :hover {
      color: red;
    }
    svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }
  `}
`
