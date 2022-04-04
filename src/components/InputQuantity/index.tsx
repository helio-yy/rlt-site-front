import TextField from 'components/TextField'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

import * as S from './styles'

const InputQuantity = () => {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <span className="material-icons">
          <Remove />
        </span>
        <TextField type="number" />
        <span className="material-icons">
          <Add />
        </span>
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default InputQuantity
