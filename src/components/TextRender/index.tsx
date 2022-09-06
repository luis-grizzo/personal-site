import { useRef, useState, useLayoutEffect } from 'react'
import { useTrail, animated } from 'react-spring'

import { useTrailHorizontalAnimation } from 'shared/animations'

import * as S from './styles'

export type TextRenderProps = {
  texts: TextProps[]
}

export type TextProps = {
  id: number
  paragraph: React.ReactElement
}

export const TextRender = ({ texts }: TextRenderProps): React.ReactElement => {
  const textRenderRef = useRef<HTMLDivElement>(null)

  const [isFullScrolled, setIsFullScrolled] = useState(false)
  const [isTopScroll, setIsTopScroll] = useState(false)

  const trail = useTrail(texts.length, useTrailHorizontalAnimation)

  const handleScroll = (): void => {
    const offsetHeight = textRenderRef.current?.offsetHeight ?? 0
    const scrollTop = textRenderRef.current?.scrollTop ?? 0
    const scrollHeight = textRenderRef.current?.scrollHeight ?? 0

    scrollTop === 0 ? setIsTopScroll(true) : setIsTopScroll(false)

    offsetHeight + scrollTop >= scrollHeight
      ? setIsFullScrolled(true)
      : setIsFullScrolled(false)
  }

  useLayoutEffect(() => {
    handleScroll()

    textRenderRef.current?.addEventListener('scroll', handleScroll)

    return () =>
      textRenderRef.current?.removeEventListener('scroll', handleScroll)
  })

  return (
    <S.Wrapper>
      <S.TextContainer ref={textRenderRef} className="custom-scroll">
        {trail.map((animation, index) => (
          <animated.p
            key={texts[index].id}
            style={animation}
            className="w__text"
          >
            {texts[index].paragraph}
          </animated.p>
        ))}
      </S.TextContainer>

      <S.TextFadeTop isTopScroll={isTopScroll} />
      <S.TextFadeBottom isFullScrolled={isFullScrolled} />
    </S.Wrapper>
  )
}
