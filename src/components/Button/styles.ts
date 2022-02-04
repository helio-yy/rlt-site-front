import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'outline'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    border-radius: ${theme.border.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: 14px;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    border-radius: ${theme.border.xsmall};
    position: relative;
    top: -0.4rem;
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: 16px;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    border-radius: ${theme.border.xsmall};
  `,
  fullWidth: (theme: DefaultTheme) => css`
    width: 100%;
    border-radius: ${theme.border.xsmall};
  `,
  outline: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    color: ${theme.colors.black};
    :hover {
      background: ${theme.colors.white};
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.8rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, outline }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    background: ${theme.colors.blueLight1};

    padding: ${theme.spacings.xxsmall};
    transform: translateY(0);
    font-family: inherit;
    transition: all 0.3s ease;
    border: 0;
    align-items: center;

    :hover {
      background-color: ${theme.colors.blueLight2};
      transform: translateY(-0.2rem);
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth(theme)};
    ${!!outline && wrapperModifiers.outline(theme)};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
