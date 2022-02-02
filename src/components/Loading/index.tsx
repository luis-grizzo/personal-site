import { useSpring, animated } from 'react-spring'

import Logo from '../Logo'

import * as S from './styles'

const Loading = (): React.ReactElement => {
  const AnimatedWrapper = animated(S.Wrapper)

  const style = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <AnimatedWrapper style={style}>
      <Logo />
    </AnimatedWrapper>
  )
}

export default Loading
