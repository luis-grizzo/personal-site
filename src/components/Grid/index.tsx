import { useState, useCallback, cloneElement } from 'react'
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
  const [isDesktop, setIsDesktop] = useState(
    !!(window.innerWidth > theme.mediaquerys.laptopStart)
  )

  const trail = useTrail(
    items.length,
    isDesktop
      ? { ...useTrailVerticalAnimation }
      : { ...useTrailHorizontalAnimation }
  )

  useCallback(() => {
    window.addEventListener('resize', () => {
      setIsDesktop(!!(window.innerWidth > theme.mediaquerys.laptopStart))
    })
  }, [window.innerWidth])

  return (
    <S.Grid>
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
            size: 50,
            className: 'gi__icon'
          })}
        </animated.a>
      ))}
    </S.Grid>
  )
}
