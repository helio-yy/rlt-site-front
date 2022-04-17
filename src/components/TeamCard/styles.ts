import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    transition: all 100ms ease-in;
    border-radius: ${theme.border.medium};
    margin-top: 1rem;
    margin-bottom: 3rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
        0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
        0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    }
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
    transition: all 0.3s ease;
    h1 {
      text-transform: uppercase;
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }
    p {
      font-size: 1.3rem;
    }
  `}
`
