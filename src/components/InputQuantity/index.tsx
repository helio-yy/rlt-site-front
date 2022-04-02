import TextField from 'components/TextField'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

import { InputHTMLAttributes, useCallback, useState } from 'react'
import * as S from './styles'

interface IInputQuantityProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  sobtitle?: string
}

const InputQuantity: React.FC<IInputQuantityProps> = ({
  name,
  sobtitle,
  defaultValue
}) => {
  const [inputRefByTransferr, setInputRefByTransferr] =
    useState<React.MutableRefObject<HTMLInputElement>>()

  const handleIncrement = useCallback(() => {
    if (inputRefByTransferr) {
      inputRefByTransferr.current.value = String(
        Number(inputRefByTransferr.current.value) + 1
      )
    }
  }, [inputRefByTransferr])

  const handleDecrement = useCallback(() => {
    if (inputRefByTransferr && Number(inputRefByTransferr.current.value) > 0) {
      inputRefByTransferr.current.value = String(
        Number(inputRefByTransferr.current.value) - 1
      )
    }
  }, [inputRefByTransferr])

  return (
    <S.Wrapper>
      {sobtitle && <p className="sobtitle">{sobtitle}</p>}

      <S.InputWrapper>
        <span className="material-icons" onClick={handleDecrement}>
          <Remove />
        </span>
        <TextField name={name} type="number" />
        <span className="material-icons" onClick={handleIncrement}>
          <Add />
        </span>
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default InputQuantity
