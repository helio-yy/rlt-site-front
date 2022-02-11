import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
    background: red;
    transition: all 0.1s ease-in;
    top: 2.5rem;
    left: 0;
    right: 0;
    z-index: 3;
    opacity: 0;
    transition: 0.3s linear;

    &.sticky {
      transition: all 0.1s ease-in;

      position: fixed;
      z-index: 52;
      opacity: 1;
    }
  `}
`

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    background: ${theme.colors.blueLight1};
    height: 6rem;
    display: flex;
    align-items: center;
  `}
`

export const Logo = styled.div``
export const BtnPromo = styled.div`
  width: 20rem;
  height: 3rem;
  position: absolute;
  top: 1.7rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`
