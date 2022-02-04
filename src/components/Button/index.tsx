import * as S from './styles'
// import theme from 'styles/theme'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  // colors?: 'theme.colors.black' | 'theme.colors.white' | 'theme.colors.gray'
  fullWidth?: boolean
  icon?: React.ReactNode
  outline?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  children,
  icon,
  size = 'small',
  fullWidth = false,
  outline = false,

  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    outline={outline}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
