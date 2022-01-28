import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    background-color: ${theme.colors.blueLight1};
  `}
`
export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.content};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 0 auto;
  `}

  ${media.lessThan('medium')`
  grid-template-columns:  1fr;
  `}
`
export const Column = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};

    h5 {
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xsmall};
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
    }

    a,
    span {
      display: flex;
      align-items: center;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      padding: 5px 0;
      margin-top: 5px;
      transition: all 0.2s ease;
    }
    a:hover {
      color: ${theme.colors.blueLight4};
    }
    svg {
      margin-right: 1rem;
    }
  `}
`

export const Social = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    a {
      display: inline-flex;
      justify-content: left;
      margin: 5px;
    }
    svg {
      margin-right: 0;
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.white};
    }
    a:hover {
      opacity: 0.8;
    }
  `}
`

export const SecurityCertificate = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 100px 1fr;
    padding: 1rem 3rem;
    margin-top: ${theme.spacings.medium};
    background: ${theme.colors.white};
    border-radius: 50px;
    p {
      font-size: 1.1rem};
    }
    a {
      display: inline-flex;
      margin-left: 5px;
    }
  `}
  ${media.lessThan('medium')`
  width:300px;
  display:grid;
  justify-content:center;
  margin: 2rem auto;
  padding:1rem 1rem;
  `}
`
export const AbrResorts = styled.div``
export const SiteBlindado = styled.div``

export const Copyright = styled.div`
  ${({ theme }) => css`
    align-items: center;
    font-size: 1rem;
    text-align: center;
    padding: ${theme.spacings.xxsmall} 0;
    margin-top: ${theme.spacings.small};
    background: ${theme.colors.blueLight1};
    color: ${theme.colors.white};
    a {
      display: flex;
      justify-content: center;
    }

    img {
      margin-left: 10px;
    }
  `}
`
