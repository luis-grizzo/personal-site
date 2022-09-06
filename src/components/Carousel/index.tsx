import { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { useSprings, animated, useTrail } from 'react-spring'
import { FaReact } from 'react-icons/fa'

import { FetchReposProps } from 'services'

import { useTrailVerticalAnimation } from 'shared/animations'

import * as S from './styles'

type CarouselProps = {
  items: FetchReposProps[]
}

export const Carousel = ({ items }: CarouselProps): React.ReactElement => {
  const [activeItem, setActiveItem] = useState(0)
  const [pauseAnimation, setPauseAnimation] = useState(false)

  const [animations, animationsApi] = useSprings(items.length, () => ({
    transform: 'translateY(100%)',
    scale: 0.95,
    opacity: 0
  }))

  const dotsTrailAnimation = useTrail(items.length, useTrailVerticalAnimation)

  useLayoutEffect(() => {
    handleAnimation()
  })

  useEffect(() => {
    const updateItem = setTimeout(() => {
      handleAnimation()

      setActiveItem((prevState) => {
        if (prevState + 1 === items.length) return 0
        return prevState + 1
      })
    }, 3000)

    pauseAnimation && clearTimeout(updateItem)

    return () => clearTimeout(updateItem)
  }, [activeItem, pauseAnimation])

  const handleAnimation = () =>
    animationsApi.start((index) => {
      if (index === activeItem)
        return { transform: 'translateY(0%)', scale: 1, opacity: 1 }
      return { transform: 'translateY(100%)', scale: 0.95, opacity: 0 }
    })

  const handleActiveItem = (index: number) => setActiveItem(index)

  const handleMouseEnter = useCallback(() => setPauseAnimation(true), [])

  const handleMouseLeave = useCallback(() => setPauseAnimation(false), [])

  return (
    <S.Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="items-container">
        {animations.map((animation, index) => (
          <animated.a
            key={items[index].id}
            style={animation}
            href={items[index].html_url}
            target="_blank"
            className="ic__card"
            rel="noreferrer"
          >
            <FaReact size={80} className="icc__icon" />
            <div className="icc__content">
              <h2 className="iccc__name">{items[index].name}</h2>
              <p className="iccc__description">{items[index].description}</p>
            </div>
          </animated.a>
        ))}
      </div>

      <div className="dots-container">
        {dotsTrailAnimation.map((animation, index) => (
          <animated.button
            key={items[index].id}
            style={animation}
            className={`dc__dot ${
              index === activeItem ? 'dc__dot--active' : ''
            }`}
            onClick={() => handleActiveItem(index)}
          />
        ))}
      </div>
    </S.Wrapper>
  )
}
