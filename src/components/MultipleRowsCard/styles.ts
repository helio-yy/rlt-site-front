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
    margin-top: 0.6rem;
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
