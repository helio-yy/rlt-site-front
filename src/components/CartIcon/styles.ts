import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: 0.5rem 0.8rem;
    margin-top: 0.8rem;
    margin-left: 1rem;
    position: relative;
    z-index: 5;
    svg {
      font-size: 1.8rem;
    }
  `}
`
export const badge = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.redLight2};
    color: ${theme.colors.white};
    font-size: 1rem;
    border-radius: 50%;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: 0rem;
    left: 2rem;
  `}
`
