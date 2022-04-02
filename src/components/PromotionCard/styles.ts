import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #faf8f8;
    padding: 1rem;
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

    :hover .Content {
      background-color: ${theme.colors.redLight1};
      ::before {
        content: 'RESERVAR';
        background-color: ${theme.colors.redLight1};
        border-radius: ${theme.border.small};
        font-size: ${theme.font.sizes.xlarge};
        font-weight: ${theme.font.bold};

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: -5;
        left: 0;
      }
    }

    .Content {
      ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 100%;
        margin: -2.5rem ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall};
        padding: ${theme.spacings.xsmall};
        border-radius: ${theme.border.small};
        color: white;
        background-color: ${theme.colors.blueLight1};
        transition: all 0.3s ease;
        position: relative;
      `}

      .ImageBox {
        height: auto;
        width: 100%;
      }
    }
  `}

  /*HOVER CLIP CARD*/
   .flip-card {
    background-color: transparent;
    width: 100%;
    height: 300px;
    perspective: 1000px;

    img {
      width: 100%;
      height: 300px;
      border-radius: 15px 15px 0 0;
    }

    ${media.lessThan('medium')`
      height: 350px;
      img{
        height: 350px;
      }
    `}
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-card-back {
    ${({ theme }) => css`
      background-color: ${theme.colors.blueLight2};
      color: white;
      transform: rotateY(180deg);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px 15px 0 0;
    `}
  } /*HOVER CLIP CARD*/
`

export const Info = styled.div`
  width: 6.3rem;

  h2 {
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.xsmall};
      line-height: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
    `}
  }
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    h1 {
      font-size: 2.5rem;
      font-weight: ${theme.font.extra};
    }

    span {
      font-weight: ${theme.font.extra};
      margin-right: 10px;
    }
  `}
`

export const ProductVisits = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin: ${theme.spacings.xsmall} 0;
    text-align: center;
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xxsmall};
    background-color: ${theme.colors.blueLight1};
    border-radius: ${theme.border.medium};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 3rem;
    align-items: center;
    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`
