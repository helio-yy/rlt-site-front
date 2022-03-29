import styled, { css } from 'styled-components'

export const Title = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: 1.5rem;
    padding: ${theme.spacings.small};
    border-radius: 5px;
    position: absolute;
    right: 0;
    z-index: 3;

    ::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -0.5rem;
      right: 0;
    }
  `}
`

type wrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => `
  opacity:1;
  pointer-events:auto;
  transform: translateY(0);
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);

  `,
  close: () => `
  opacity:0;
  pointer-events:none;
  transform: translateY(-1rem);
  `
}

export const Wrapper = styled.div<wrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;
    z-index: ${theme.layers.alwaysOnTop};

    ${Content} {
      transition: all 0.2s ease-in;
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`

type overlayProps = {
  isOpen: boolean
}

export const Overlay = styled.div<overlayProps>`
  background: rgba(0, 0, 0, 0.7);
  transition: 0.3s linear;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${({ isOpen }) => `
    opacity: ${isOpen ? 0.9 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};

  `}
`
