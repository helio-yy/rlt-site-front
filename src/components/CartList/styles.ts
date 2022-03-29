import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    width: 21rem;
    display: flex;
    flex-direction: column;
    position: relative;
    p {
      font-size: 1rem;
      text-align: center;
    }
  `}
`
export const Thunb = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    display: flex;
    img {
      max-width: 6rem;
      border-radius: ${theme.border.xsmall};
    }
  `}
`
export const Infor = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  h5 {
    font-weight: 500;
  }
  h6 {
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: 500;
  }
`
export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: right;
  `}
`

export const SubTotal = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
    padding-top: ${theme.spacings.xxsmall};
    border-top: 1px solid ${theme.colors.lightGray};
    text-align: right;
    font-size: 1.4rem;
    font-weight: ${theme.font.medium};
  `}
`
