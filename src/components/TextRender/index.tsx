import { useRef, useState, useLayoutEffect } from 'react'
import { useTrail, animated } from 'react-spring'

import { Button } from 'components/Button'

import { useTrailVerticalAnimation } from 'shared/animations'

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

  const trail = useTrail(texts.length, { ...useTrailVerticalAnimation })

  const handleIsFullScrolled = (): void => {
    const offsetHeight = textRenderRef.current?.offsetHeight ?? 0
    const scrollTop = textRenderRef.current?.scrollTop ?? 0
    const scrollHeight = textRenderRef.current?.scrollHeight ?? 0

    offsetHeight + scrollTop >= scrollHeight
      ? setIsFullScrolled(true)
      : setIsFullScrolled(false)
  }

  useLayoutEffect(() => {
    textRenderRef.current?.offsetHeight ===
      textRenderRef.current?.scrollHeight && setIsFullScrolled(true)

    textRenderRef?.current?.addEventListener('scroll', handleIsFullScrolled)

    return () =>
      textRenderRef.current?.removeEventListener('scroll', handleIsFullScrolled)
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

      <Button onClick={() => console.log(textRenderRef)}>test</Button>
      <S.MoreTextEffect isFullScrolled={isFullScrolled} />
    </S.Wrapper>
  )
}
