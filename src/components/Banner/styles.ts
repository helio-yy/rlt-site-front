import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type ImageProps = {
  src: string
}

export const Wrapper = styled.main`
  ${({ theme, color }) => css`
    overflow: hidden;
    position: relative;
  `}
`
export const Image = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: red;
    margin-bottom: ${theme.spacings.medium};
    overflow-y: hidden;
    position: relative;
    img {
      width: 100%;
    }
  `}
`
// export const Caption = styled.div`
//   ${({ theme }) => css`
//     width: 100%;
//     background-color: rgba(0, 0, 0, 0.7);
//     padding: ${theme.spacings.small};

//     ${media.greaterThan('medium')`

//        padding:${theme.spacings.large};
//        position:absolute;
//        bottom:0;
//        left:0;
//     `}
//   `}
// `
// export const Title = styled.h2`
//   ${({ theme }) => css`
//     font-size: ${theme.font.sizes.large};
//     color: white;

//     ${media.greaterThan('medium')`
//     font-size: ${theme.font.sizes.xxlarge};

//     `}
//   `}
// `
// export const Subtitle = styled.h3`
//   ${({ theme }) => css`
//     font-size: ${theme.font.sizes.small};
//     color: white;
//     margin-bottom: 2rem;
//     strong {
//       color: red;
//     }
//     ${media.greaterThan('medium')`
//     font-size: ${theme.font.sizes.large};

//     `}
//   `}
// `
