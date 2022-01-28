import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
  `}
`
export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.content};
    margin: ${theme.spacings.xxlarge} auto;
    padding: ${theme.spacings.medium} 0;
  `}
`

export const Logos = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: ${theme.spacings.xxlarge} 0;
    img {
      width: 10rem;
      display: block;
      margin-bottom: ${theme.spacings.xxsmall};
    }
    a {
      margin: ${theme.spacings.large};

      :nth-child(1) {
        cursor: default;
        img {
          border-radius: 50%;
        }
      }

      ${media.lessThan('medium')`
      margin: ${theme.spacings.small};
      `}
    }
  `}
`

export const Widgets = styled.div`
  max-width: 50rem;
  display: flex;
  justify-content: center;
  background: #eee;
  margin: 1rem auto;
  padding: 1rem;
`
