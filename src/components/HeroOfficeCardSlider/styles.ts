import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  .thunbs {
    padding: 0.5rem;
    display: flex;
    display: table-cell;
    img {
      width: 12.2rem;
      ${media.lessThan('medium')`
      padding: 0;
      width: 7.5rem;
      margin-top:-1rem;
      `}
      ${media.lessThan('small')`
      width: 7rem;
      `}
    }
  }

  ${({ theme }) => css`
    ul,
    li {
      list-style: none;
      display: inline-block;
    }
    ${media.lessThan('large')`
      overflow-x: hidden;

    `}

    .slick-track,
    .slick-list {
      display: flex;
      width: 55rem;
    }
    ${media.lessThan('medium')`
      .slick-track,
      .slick-list {
        display: block;
        height:auto!important;
        width: 30rem;
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
      top: 50%;
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
