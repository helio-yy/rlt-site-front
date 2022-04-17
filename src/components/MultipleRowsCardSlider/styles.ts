import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${media.lessThan('large')`
    overflow: hidden;

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
    }
    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
      ${media.lessThan('medium')`
      margin:${theme.spacings.xsmall}
      `}
    }
    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 0.3rem;
      }
      .slick-list {
        margin: 0 -${theme.spacings.xxsmall};

      }
    `}
    .slick-prev,
    .slick-next {
      display: block;
      cursor: pointer;
      position: absolute;
      bottom: -6%;
      width: 10rem;
      height: 1rem;
      padding: 0;
      transform: translate(0, -50%);
      width: auto;
      z-index: 5;
    }
    .slick-prev {
      left: 0.8rem;
    }
    .slick-next {
      right: 0.8rem;
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
