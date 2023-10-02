import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { Frame, Button } from 'components'

import { useSpringHorizontalAnimation } from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { useWatcher } from 'shared/hooks/watcher'

import * as S from './styles'

const Home = (): React.ReactElement => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { nextPath, setNextPath } = useWatcher()

  const [mountPage, setMountPage] = useState(true)

  const { linkedin } = socialMedia

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
      <Frame mountComponent={mountPage} />

      <div className="wrapper">
        <animated.h1 style={titleAnimation} className="w__title">
          Olá, sou um <br />
          <strong className="wt__highlight">Dev. Front-End</strong> {'&'} <br />
          <strong className="wt__highlight">UI-Designer</strong>
        </animated.h1>

        <animated.p style={textAnimation} className="w__description">
          Me chamo{' '}
          <a
            href={linkedin.url}
            target="_blank"
            title={linkedin.name}
            className="wd__link"
            rel="noreferrer"
          >
            Luís Grizzo
          </a>{' '}
          e este é meu site! Conheça um pouco sobre meu trabalho, veja meus
          projetos e encontre meus links para contato! Obrigado pela visita!
        </animated.p>

        <animated.div style={buttonsAnimation} className="w__button-wrapper">
          <Button onClick={() => setNextPath('/portfolio')}>
            Meu portfólio
          </Button>

          <Button variant="secondary" onClick={() => setNextPath('/contact')}>
            Entre em contato
          </Button>
        </animated.div>
      </div>
    </S.Page>
  )
}

export default Home
