import * as S from './styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps): React.ReactElement => {
  return (
    <S.Wrapper type='button' {...props}>
      {children}
    </S.Wrapper>
  )
}

export default Button
