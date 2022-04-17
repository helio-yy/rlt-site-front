import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    h1 {
      text-align: center;
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.white};
    }
    margin-top: ${theme.spacings.xxlarge};
    ${media.lessThan('large')`
      overflow-x: hidden;

    `}
    .slick-track,
    .slick-list {
      display: flex;
    }
    ${media.lessThan('medium')`
      .slick-track,
      .slick-list {
        display: block;
        height:auto!important;

      }
    `}
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
      ${media.lessThan('medium')`
      margin:${theme.spacings.xsmall}
      `}
    }
    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xxsmall};

      }
    `}
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 35%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
