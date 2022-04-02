import styled from 'styled-components'
import * as TextFieldStyles from 'components/TextField/styles'
import * as InputQuantityStyles from 'components/InputQuantity/styles'

export const Wrapper = styled.div`
  width: 710px;
  height: auto;
  border-radius: 5rem;
  background: #fff;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 4;
  margin-top: 3rem;
  right: 0;
  left: 0;

  ${TextFieldStyles.Wrapper} {
    width: 100%;
    display: inline-block;
    margin: 0 1rem;
  }

  ${TextFieldStyles.Input} {
    padding: 0.4rem 0;
  }

  ${InputQuantityStyles.InputWrapper} {
    margin-bottom: 1rem;
    padding: 0;
  }

  .textTest {
    font-size: 1.3rem;
    margin-top: 0rem;
    margin-bottom: 0.5rem;
  }
`
