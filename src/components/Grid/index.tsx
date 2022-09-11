import {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  cloneElement
} from 'react'
import { useTrail, animated } from 'react-spring'

import {
  useTrailVerticalAnimation,
  useTrailHorizontalAnimation
} from 'shared/animations'

import { theme } from 'styles/theme'

import * as S from './styles'

type GridProps = {
  items: ItemProps[]
}

export type ItemProps = {
  name: string
  url: string
  icon: React.ReactElement
}

export const Grid = ({ items }: GridProps): React.ReactElement => {
  const gridRef = useRef<HTMLDivElement>(null)

  const [isFullLeftScroll, setIsFullLeftScroll] = useState(false)
  const [isFullRightScroll, setIsFullRightScroll] = useState(false)
  const [isDesktop, setIsDesktop] = useState(
    !!(window.innerWidth > theme.mediaquerys.laptopStart)
  )

  const trail = useTrail(
    items.length,
    isDesktop ? useTrailVerticalAnimation : useTrailHorizontalAnimation
  )

  const handleScroll = (): void => {
    const offsetWidth = gridRef.current?.offsetWidth ?? 0
    const scrollLeft = gridRef.current?.scrollLeft ?? 0
    const scrollWidth = gridRef.current?.scrollWidth ?? 0

    scrollLeft === 0 ? setIsFullLeftScroll(true) : setIsFullLeftScroll(false)

    offsetWidth + scrollLeft >= scrollWidth
      ? setIsFullRightScroll(true)
      : setIsFullRightScroll(false)
  }

  const handleResize = (): void =>
    setIsDesktop(!!(window.innerWidth > theme.mediaquerys.laptopStart))

  useLayoutEffect(() => {
    handleScroll()

    gridRef.current?.addEventListener('scroll', handleScroll)

    return () => gridRef.current?.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [window.innerWidth])

  return (
    <S.Wrapper>
      <S.Grid ref={gridRef}>
        {trail.map((animation, index) => (
          <animated.a
            key={items[index].name}
            href={items[index].url}
            title={items[index].name}
            style={animation}
            target="_blank"
            className="g__item"
            rel="noreferrer"
          >
            {cloneElement(items[index].icon, {
              size: isDesktop ? 60 : 50,
              className: 'gi__icon'
            })}
          </animated.a>
        ))}
      </S.Grid>

      {!isDesktop && <S.FadeLeft isFullLeftScroll={isFullLeftScroll} />}
      {!isDesktop && <S.FadeRight isFullRightScroll={isFullRightScroll} />}
    </S.Wrapper>
  )
}
