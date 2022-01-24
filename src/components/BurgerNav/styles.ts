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
`
type overlayProps = {
  isOpen: boolean
}

export const Overlay = styled.div<overlayProps>`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.2s ease;

  ${({ isOpen }) => `
    opacity: ${isOpen ? 0.5 : 0};
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
    background: ${theme.colors.white};
    z-index: ${theme.layers.menu};
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    text-align: start;
    transition: all 0.4s ease-out;

    li:nth-child(2) {
      border-bottom: 1px solid ${theme.colors.lightGray};
    }
    li:nth-child(9) {
      border-bottom: 1px solid ${theme.colors.lightGray};
    }
    a {
      display: flex;
      margin: 0.5rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: ${theme.font.medium};
      padding: 0.6rem ${theme.spacings.xxsmall};
      justify-content: flex-end;
      transition: all 0.2s ease;
      :hover {
        color: ${theme.colors.blueLight4};
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
      color: ${theme.colors.darkGray};
      font-size: 2rem;

      cursor: pointer;
      :hover {
        color: ${theme.colors.blueLight4};
      }
    }
  `}
`

export const InforPhone = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2.5rem;
  p {
    font-size: 1.3rem;
  }
`

// export const lineDivision = styled.div`
//   width: 100%;
//   height: 1px;
//   margin: 0.7rem 0;
//   background-color: #eee;
// `
