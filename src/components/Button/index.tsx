import * as S from './styles'
// import theme from 'styles/theme'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  backgroundColor?:
    | 'blueLight1'
    | 'grennLight1'
    | 'orangeLight1'
    | 'redLight1'
    | 'white'
    | 'black'
  textColor?: 'white' | 'blueLight1'
  fullWidth?: boolean
  icon?: React.ReactNode
  outline?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  children,
  icon,
  size = 'small',
  backgroundColor = 'blueLight1',
  textColor = 'blueLight1',
  fullWidth = false,
  outline = false,

  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    outline={outline}
    backgroundColor={backgroundColor}
    textColor={textColor}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
