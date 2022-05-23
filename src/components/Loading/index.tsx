import { useSpring, animated } from 'react-spring'

import { Logo } from 'components'

import * as S from './styles'

export const Loading = (): React.ReactElement => {
  const AnimatedWrapper = animated(S.Wrapper)

  const style = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <AnimatedWrapper style={style}>
      <Logo />
    </AnimatedWrapper>
  )
}
