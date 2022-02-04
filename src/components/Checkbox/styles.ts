import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

// export const Wrapper = styled.main``

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.1rem solid ${theme.colors.blueLight1};
    border-radius: 0.2rem;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;
    &:before {
      content: '';
      width: 0.4rem;
      height: 0.7rem;
      border: 0.1rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.2rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.blueLight1};
    }
    &:checked {
      border-color: ${theme.colors.blueLight1};
      background: ${theme.colors.blueLight1};
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`
