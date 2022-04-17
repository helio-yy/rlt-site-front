import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.xlarge} 0;
    margin-top: ${theme.spacings.xlarge};
  `}
`
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xlarge} 0;
    align-items: center;
    grid-gap: 2rem;
    margin: 0 auto;
    span {
    }
    h5 {
      font-weight: ${theme.font.bold};
      display: flex;
      align-items: center;
      margin-bottom: 0.7rem;
      svg {
        margin-right: 1rem;
      }
      ${media.lessThan('medium')`
      justify-content:center;

      `}
    }
  `}

  ${media.lessThan('medium')`
    display: block;
    text-align: center;
  `}

  .back-to-top {
    background: transparent;
    border: none;
    position: fixed;
    bottom: 13rem;
    right: 11rem;
    width: 70px;
    cursor: pointer;
  }
`
// export const Column = styled.div`
//   ${({ theme }) => css`
//     padding: ${theme.spacings.small};
//     background: red;

//     :nth-child(1) {
//       text-align: left;
//     }
//     :nth-child(2) {
//       text-align: center;
//     }
//     :nth-child(3) {
//       display: flex;
//       justify-content: end;
//     }
//   `}
// `

export const Social = styled.div`
  ${({ theme }) => css`
    a {
      display: inline-flex;
      margin: 1rem;
    }
    svg {
      margin-right: 0;
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.lightGray};
    }
    a:hover {
      opacity: 0.8;
    }
  `}
`
