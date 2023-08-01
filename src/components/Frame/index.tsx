import { useEffect, useLayoutEffect, useState } from 'react'
import { useSpring, useSprings, animated } from 'react-spring'

import { useResize } from 'shared/hooks/resize'
import {
  useSpringVerticalAnimation,
  useSpringHorizontalAnimation
} from 'shared/animations'

import retrato1 from 'assets/retrato1.png'
import retrato3 from 'assets/retrato3.png'
import retrato4 from 'assets/retrato4.png'
import retrato6 from 'assets/retrato6.png'

import * as S from './styles'

const images = [
  { id: 0, file: retrato1 },
  { id: 3, file: retrato6 },
  { id: 1, file: retrato3 },
  { id: 2, file: retrato4 }
]

interface FrameProps {
  mountComponent: boolean
}

export const Frame = ({ mountComponent }: FrameProps): React.ReactElement => {
  const { isDesktop } = useResize()

  const [activeImage, setActiveImage] = useState(0)

  const [animations, animationsApi] = useSprings(images.length, () => ({
    transform: 'translateY(100%)'
  }))

  const springBaseAnimation = isDesktop
    ? useSpringVerticalAnimation
    : useSpringHorizontalAnimation

  const AnimatedCard = animated(S.Card)
  const cardAnimation = useSpring({
    ...springBaseAnimation,
    reverse: !mountComponent
  })

  useLayoutEffect(() => {
    handleAnimation()
  })

  useEffect(() => {
    const updateImage = setTimeout(() => {
      handleAnimation()

      setActiveImage((prevState) => {
        if (prevState + 1 === images.length) return 0
        return prevState + 1
      })
    }, 3000)

    return () => clearTimeout(updateImage)
  }, [activeImage])

  const handleAnimation = () =>
    animationsApi.start((index) => {
      if (index === activeImage) return { transform: 'translateY(0%)' }
      return { transform: 'translateY(100%)' }
    })

  return (
    <AnimatedCard style={cardAnimation}>
      {animations.map((animation, index) => (
        <animated.img
          key={images[index].id}
          style={animation}
          src={images[index].file}
          alt="Luís Grizzo"
          className="c__image"
        />
      ))}
    </AnimatedCard>
  )
}
