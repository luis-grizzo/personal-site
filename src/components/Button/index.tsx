import * as S from './styles'

export type ButtonVariants = 'primary' | 'secondary'

export type ButtonProps = {
  variant?: ButtonVariants
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <S.Wrapper type="button" variant={variant} {...props}>
      {children}
    </S.Wrapper>
  )
}

export default Button
