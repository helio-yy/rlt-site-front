import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    padding: ${theme.spacings.xsmall};
    margin: ${theme.spacings.xxlarge} auto;
    display: flex;
  `}

  ${media.lessThan('medium')`
    flex-direction: column;
    text-align: center;

`}
`

export const AboutDescription = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};

    ${media.lessThan('medium')`
    padding: 0;
      p{
        padding:1.5rem 0;
      }
  `}
  `}
`
export const Photo = styled.div``
