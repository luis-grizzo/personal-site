import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { Button, Grid, ItemProps } from 'components'

import { useSpringHorizontalAnimation } from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { convertObjectToArray } from 'shared/utils'
import { useWatcher } from 'shared/hooks/watcher'

import * as S from './styles'

const Contact = (): React.ReactElement => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { nextPath, setNextPath } = useWatcher()

  const [mountPage, setMountPage] = useState(true)

  const gridItems = convertObjectToArray<ItemProps>(socialMedia)

  const handleUnmountedPage = (finished: boolean | undefined) =>
    finished && nextPath && navigate(nextPath)

  const titleAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    reverse: !mountPage
  })

  const textAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 100,
    reverse: !mountPage
  })

  const buttonsAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 200,
    reverse: !mountPage,
    onRest: ({ finished }) => handleUnmountedPage(finished)
  })

  useEffect(() => {
    nextPath && nextPath !== pathname && setMountPage(false)
  }, [nextPath])

  return (
    <S.Page>
      <Grid mountComponent={mountPage} items={gridItems} />

      <div className="wrapper">
        <animated.h1 style={titleAnimation} className="w__title">
          <strong className="wt__highlight">Redes</strong> sociais
        </animated.h1>

        <animated.p style={textAnimation} className="w__description">
          Aqui você encontra todas as minhas redes sociais e formas de contato,
          será ótimo conversar com você!
        </animated.p>

        <animated.div style={buttonsAnimation} className="w__button-wrapper">
          <Button onClick={() => setNextPath('/portfolio')}>
            Meu portfólio
          </Button>

          <Button variant="secondary" onClick={() => setNextPath('/')}>
            Sobre mim
          </Button>
        </animated.div>
      </div>
    </S.Page>
  )
}

export default Contact
