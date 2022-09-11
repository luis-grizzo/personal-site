import { useSpring, animated } from 'react-spring'

import { Logo } from 'components'

import { useSpringVerticalAnimation } from 'shared/animations'

import * as S from './styles'

export type LoadingProps = {
  isChildren: boolean
}

export const Loading = ({ isChildren }: LoadingProps): React.ReactElement => {
  const animation = useSpring(useSpringVerticalAnimation)

  return (
    <S.Wrapper isChildren={isChildren}>
      <animated.div style={animation} className="w__content">
        <Logo className="wc__logo" />

        <div className="wc__progress-bar">
          <div className="wcpb__bar" />
        </div>
      </animated.div>
    </S.Wrapper>
  )
}
