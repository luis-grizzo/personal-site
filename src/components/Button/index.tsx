import * as S from './styles'

export type ButtonVariants = 'primary' | 'secondary' | 'ghost'

export type ButtonProps = {
  variant?: ButtonVariants
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
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
