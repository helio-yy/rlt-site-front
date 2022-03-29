import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'blueLight1' | 'grennLight1' | 'gray' | 'black'
  textPosition?: 'left' | 'right'
}

const Heading = ({
  children,
  color = 'blueLight1',
  textPosition = 'left'
}: HeadingProps) => (
  <S.Wrapper textPosition={textPosition} color={color}>
    {children}
  </S.Wrapper>
)

export default Heading
