import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { Carousel, Button, Loading } from 'components'

import { fetchRepos, FetchReposProps } from 'services'

import { useSpringHorizontalAnimation } from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { handlePageChange } from 'shared/utils'

import * as S from './styles'

export const Portfolio = (): React.ReactElement => {
  const navigate = useNavigate()

  const [data, setData] = useState<FetchReposProps[]>([])
  const [loading, setLoading] = useState(data.length === 0)

  useEffect(() => {
    fetchRepos().then((data) => setData(data))
  }, [])

  useEffect(() => {
    data.length > 0 && setLoading(false)
  }, [data])

  const titleAnimation = useSpring(useSpringHorizontalAnimation)

  const textAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 100
  })

  const buttonsAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 200
  })

  const { github } = socialMedia

  return (
    <S.Page>
      {loading ? <Loading isChildren /> : <Carousel items={data} />}

      <div className="content">
        <animated.h1 style={titleAnimation} className="c__title">
          <strong className="ct__highlight">Portfólio</strong>
        </animated.h1>

        <animated.p style={textAnimation} className="c__description">
          Veja e acesse meus projetos desenvolvidos e publicados em meu{' '}
          <a
            className="cd__link"
            href={github.url}
            title={github.name}
            target="_blank"
            rel="noreferrer"
          >
            {github.name}
          </a>
          !
        </animated.p>

        <animated.div style={buttonsAnimation} className="c__buttons-wrapper">
          <Button
            variant="primary"
            onClick={() => handlePageChange(navigate('/about'))}
          >
            Sobre mim
          </Button>
          <Button
            variant="secondary"
            onClick={() => handlePageChange(navigate('/contact'))}
          >
            Entre em contato
          </Button>
        </animated.div>
      </div>
    </S.Page>
  )
}
