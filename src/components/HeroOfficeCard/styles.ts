import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color:gold;
    transition: all 100ms ease-in;
    border-radius: ${theme.border.medium};
    cursor: pointer;
    }
  `}
`

export const ImageBox = styled.div`
  height: auto;
  width: 100%;
  img {
    max-width: 100%;
  }
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: ${theme.spacings.xsmall};
    color: white;
    background-color: ${theme.colors.blueLight1};
    transition: all 0.3s ease;
    h1 {
      text-transform: uppercase;
    }
  `}
`
