import styled, { css } from 'styled-components'
import * as TextFieldStyles from 'components/TextField/styles'

export const Wrapper = styled.div`
  width: 15rem;
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    border: 1px solid ${theme.colors.blueLight1};
    color: var(--grey-300);
    border-radius: 0.625rem;
    transition: 0.2s ease;
    ${TextFieldStyles.Wrapper} {
      margin: 0;
    }
    ${TextFieldStyles.InputWrapper} {
      padding: 0;
    }

    input {
      text-align: center;
    }

    > div {
      > div {
        border: none;
      }
    }

    > span {
      border-radius: 50%;
      background: ${theme.colors.blueLight3};
      color: white;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.5rem;
      min-height: 2.5rem;
      min-width: 2.5rem;
      user-select: none;
      svg {
        font-size: 1.8rem;
      }

      cursor: pointer;
    }
  `}
`
