import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const BurgerIcon = styled.div`
  margin-right: 2rem;
  svg {
    font-size: 2.5rem;
    color: #fff;
    cursor: pointer;
  }

  ${media.lessThan('medium')`
    top:35%;
    z-index: 5;
    position: absolute;
    right: 0;
  `}

  ${media.lessThan('medium')`
    display: flex;
  `}
`
type overlayProps = {
  isOpen: boolean
}

export const Overlay = styled.div<overlayProps>`
  background: rgba(0, 0, 0, 0.7);
  transition: 0.3s linear;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  ${({ isOpen }) => `
    opacity: ${isOpen ? 0.9 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};

  `}
`
type BurgerNavProps = {
  isOpen: boolean
}

export const BurgerNav = styled.nav<BurgerNavProps>`
  ${({ theme }) => css`
    display: none;
    position: fixed;
    width: 25rem;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${theme.colors.darkGray};
    z-index: ${theme.layers.menu};
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    text-align: start;
    transition: all 0.4s ease-out;

    a {
      display: flex;
      margin: 0.5rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: ${theme.font.medium};
      padding: 0.6rem ${theme.spacings.xxsmall};
      justify-content: flex-end;
      transition: all 0.2s ease;
      color: ${theme.colors.white};

      :hover {
        color: ${theme.colors.orangeLight1};
      }
      svg {
        margin-left: 0.8rem;
      }
    }
  `}

  ${({ isOpen }) => `
    opacity: ${isOpen ? 1 : 0};
    transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
  `}

  ${media.lessThan('medium')`
    display: flex;
  `}
`
export const CloseWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-self: flex-start;
    position: relative;
    padding: 15px 5px;
    justify-content: end;
    margin-bottom: 2rem;

    svg {
      color: ${theme.colors.lightGray};
      font-size: 2rem;

      cursor: pointer;
      :hover {
        color: ${theme.colors.orangeLight1};
      }
    }
  `}
`
