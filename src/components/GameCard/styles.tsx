import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color:#eee;

    padding: 1rem;
    transition: all 100ms ease-in;
    border-radius: ${theme.border.small};
    margin-top: 1rem;
    margin-bottom: 3rem;

    &:hover {
      transform: scale(1.02);
      box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
  }
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

      .ImageBox{
        height: auto;
        width: 100%;
        background: #f6f7f8;
        background-image: linear-gradient(
          to right,
          #f6f7f8 0%,
          #edeef1 20%,
          #f6f7f8 40%,
          #f6f7f8 100%
        );
        background-size: 80rem 14rem;
        animation: placeholderShimmer 1s linear infinite forwards;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @keyframes placeholderShimmer {
          0% {
            background-position: -40rem 0;
          }
          100% {
            background-position: 40rem 0;
          }
        }


      }


    }
//HOVER CLIP//
.flip {
    position: relative;
    display: flex;
    transform-style: preserve-3d;
    transition: transform 1s;
    width: 100%;
    margin: 0 auto;
}

.flip .front {
    backface-visibility: hidden;
    background: teal;
    box-sizing: border-box;
    color: #fff;
    font-weight: bold;
    left: 0;
    display: flex;
    text-align: center;
    top: 0;
    width:inherit;
    img{
      width:100%;
    }
}

.flip .back {
    backface-visibility: hidden;
    background: #016699;
    color: #fff;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    -webkit-transform: rotateY( 180deg );
    transform: rotateY( 180deg );
    top: 0;
}

.flip:hover {
    -webkit-transform: rotateY( 180deg );
   transform: rotateY( 180deg );
}
//HOVER CLIP//

  `}
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
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
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
