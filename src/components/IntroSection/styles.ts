import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
  `}
`
export const WrapperTeste = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.content};
    grid-gap: ${theme.grid.gutter};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    button {
      margin-top: ${theme.spacings.large};
    }
    ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
  `}
`

export const Aside = styled.div`
  ${({ theme }) => css`
    height: 130px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: ${theme.spacings.small};
    grid-gap: ${theme.grid.gutter};

    ${media.lessThan('medium')`
    height: 400px;
    grid-template-columns: 1fr;
    `}
  `}
`

/*****************************************/

export const MainEffectHovers = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: ${theme.border.small};

    h1 {
      color: ${theme.colors.white};
      font-size: 4rem;
      position: absolute;
      bottom: 2rem;
      right: 2.5rem;
      z-index: 10;
      font-family: 'bodoni_elegant_extbdregular';
    }

    :hover::before {
      transform: scale(1.1);
    }
    .Element {
      width: 20rem;
      height: 20rem;
      display: flex;
      border-radius: 50%;
      position: absolute;
      top: 10rem;
      bottom: 0;
      right: -20%;
      transition: all 600ms;
      transform: translateY(0);
      opacity: 0;
    }
    :hover {
      .Element {
        background: ${theme.colors.orangeLight2};
        transform: translateY(-4rem);
        opacity: 1;
      }
    }
  `}
`

export const VideosWrapper = styled(MainEffectHovers)`
  ::before {
    content: '';
    background-image: url('https://s3.sa-east-1.amazonaws.com/cms.resortlatorre.com.br/Imagens/Upload/29.jpg');
    background-size: cover;
    transition: transform 0.5s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const PhotosWrapper = styled(MainEffectHovers)`
  ::before {
    content: '';
    background-image: url('https://s3-sa-east-1.amazonaws.com/cms.resortlatorre.com.br/Imagens/pcGOPBgG6GnvuuU.jpeg');
    background-size: cover;
    transition: transform 0.5s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

// export const Semente = styled.div``

export const Stamps = styled.div`
  ${({ theme }) => css`
    max-width: 28rem;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  `}
`
