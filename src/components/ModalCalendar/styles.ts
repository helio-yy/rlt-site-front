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
    justify-content: center;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: 0rem;
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.medium};
    position: absolute;
    left: 1rem;
    z-index: 3;
    box-shadow: ${theme.shadows.shadowsCard};

    /*::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -0.5rem;
      left: 5rem;
    }*/
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
