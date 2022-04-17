import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  overflow: hidden;
  position: relative;
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
