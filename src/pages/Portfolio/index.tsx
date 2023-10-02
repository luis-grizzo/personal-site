import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { fetchRepos, FetchReposProps } from 'services'

import { Button, Carousel, Loading } from 'components'

import { useSpringHorizontalAnimation } from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { useWatcher } from 'shared/hooks/watcher'

import * as S from './styles'

const Portfolio = (): React.ReactElement => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { nextPath, setNextPath } = useWatcher()

  const [mountPage, setMountPage] = useState(true)
  const [data, setData] = useState<FetchReposProps[]>([])
  const [loading, setLoading] = useState(data.length === 0)

  const { github } = socialMedia

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
    fetchRepos().then((data) => setData(data))
  }, [])

  useEffect(() => {
    data.length > 0 && setLoading(false)
  }, [data])

  useEffect(() => {
    nextPath && nextPath !== pathname && setMountPage(false)
  }, [nextPath])

  return (
    <S.Page>
      {loading ? (
        <Loading isChildren />
      ) : (
        <Carousel items={data} mountComponent={mountPage} />
      )}

      <div className="content">
        <animated.h1 style={titleAnimation} className="c__title">
          Meu <strong className="ct__highlight">portfólio</strong>
        </animated.h1>

        <animated.p style={textAnimation} className="c__description">
          Veja e acesse meus projetos desenvolvidos e publicados em meu{' '}
          <a
            className="cd__link"
            href={github.url}
            title={`Acessar meu ${github.name}`}
            target="_blank"
            rel="noreferrer"
          >
            {github.name}
          </a>
          !
        </animated.p>

        <animated.div style={buttonsAnimation} className="c__buttons-wrapper">
          <Button variant="primary" onClick={() => setNextPath('/')}>
            Sobre mim
          </Button>
          <Button variant="secondary" onClick={() => setNextPath('/contact')}>
            Entre em contato
          </Button>
        </animated.div>
      </div>
    </S.Page>
  )
}

export default Portfolio
