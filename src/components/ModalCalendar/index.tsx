import { useState } from 'react'
import * as S from './styles'

export type ModalCalendarProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const ModalCalendar = ({ title, children }: ModalCalendarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default ModalCalendar
