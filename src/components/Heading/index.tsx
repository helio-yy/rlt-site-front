import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'blueLight1' | 'grennLight1' | 'gray' | 'black'
}

const Heading = ({ children, color = 'blueLight1' }: HeadingProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Heading
