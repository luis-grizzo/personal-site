import {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
  cloneElement
} from 'react'
import { useSprings, animated, useTrail } from 'react-spring'
import { MdStar, MdCode } from 'react-icons/md'
import { FaCss3 } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { BiLogoTypescript } from 'react-icons/bi'

import { FetchReposProps } from 'services'

import { useTrailVerticalAnimation } from 'shared/animations'

import * as S from './styles'

type CarouselProps = {
  items: FetchReposProps[]
  mountComponent: boolean
}

export const Carousel = ({
  items,
  mountComponent
}: CarouselProps): React.ReactElement => {
  const cardRef = useRef<HTMLDivElement>(null)

  const [activeItem, setActiveItem] = useState(0)
  const [pauseAnimation, setPauseAnimation] = useState(false)

  const [animations, animationsApi] = useSprings(items.length, () => ({
    transform: 'translateY(100%)',
    scale: 0.95,
    opacity: 0
  }))

  const dotsTrailAnimation = useTrail(items.length, {
    ...useTrailVerticalAnimation,
    reverse: !mountComponent
  })

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
    }, 5000)

    // pauseAnimation && clearTimeout(updateItem)
    clearTimeout(updateItem)

    return () => clearTimeout(updateItem)
  }, [activeItem, pauseAnimation])

  const handleAnimation = () =>
    animationsApi.start((index) => {
      if (index === activeItem && mountComponent)
        return { transform: 'translateY(0%)', scale: 1, opacity: 1 }
      return { transform: 'translateY(100%)', scale: 0.95, opacity: 0 }
    })

  const handleActiveItem = (index: number) => setActiveItem(index)

  const handlePauseAnimation = useCallback(() => setPauseAnimation(true), [])

  const handlePlayAnimation = useCallback(() => setPauseAnimation(false), [])

  const handleTouchStart = useCallback(() => cardRef.current?.focus(), [])

  const handleLanguageIcon = (language: string) => {
    const selectedLanguage = {
      css: <FaCss3 />,
      typescript: <BiLogoTypescript />,
      javascript: <DiJavascript1 />,
      default: <MdCode />
    }[language || 'default']

    return (
      selectedLanguage &&
      cloneElement(selectedLanguage, {
        size: 16,
        className: 'icccht__icon'
      })
    )
  }

  return (
    <S.Wrapper
      onMouseEnter={handlePauseAnimation}
      onMouseLeave={handlePlayAnimation}
    >
      <div className="items-container">
        {animations.map((animation, index) => (
          <animated.div
            ref={activeItem === index ? cardRef : null}
            key={items[index].id}
            style={animation}
            className="ic__card"
            onTouchStart={handleTouchStart}
            onFocus={handlePauseAnimation}
            onBlur={handlePlayAnimation}
            tabIndex={activeItem === index ? 1 : -1}
          >
            <div className="icc__user">
              <img
                src={items[index].owner.avatar_url}
                alt={`Avatar de ${items[index].owner.login}`}
                className="iccu__image"
              />

              <span className="iccu__name">{items[index].owner.login}</span>
            </div>

            <div className="icc__content">
              <div className="iccc__heading">
                <h2 className="iccch__name">{items[index].name}</h2>

                <div className="iccch__tags">
                  <div className="icccht__tag">
                    <MdStar size={16} className="icccht__icon" />

                    <span className="icccht__text">
                      {items[index].stargazers_count}
                    </span>
                  </div>

                  {!!items[index].language && (
                    <div className="icccht__tag">
                      {handleLanguageIcon(items[index].language.toLowerCase())}

                      <span className="icccht__text">
                        {items[index].language}
                      </span>
                    </div>
                  )}
                </div>

                <div className="iccct__links">
                  <a
                    href={items[index].html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="iccctl__link"
                  >
                    Repositório
                  </a>

                  {!!items[index].homepage && (
                    <>
                      <span className="iccctl__dot" />

                      <a
                        href={items[index].homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="iccctl__link"
                      >
                        Homepage
                      </a>
                    </>
                  )}
                </div>
              </div>

              <p className="iccc__description">{items[index].description}</p>
            </div>
          </animated.div>
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
