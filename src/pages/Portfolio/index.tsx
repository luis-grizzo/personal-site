import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSpring, useTrail, animated } from 'react-spring'

import { Carousel, Button } from 'components'

import { fetchRepos, FetchReposProps } from 'services'

import {
  useSpringHorizontalAnimation,
  useTrailVerticalAnimation
} from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { handlePageChange } from 'shared/utils'

import * as S from './styles'

const Portfolio = (): React.ReactElement => {
  const navigate = useNavigate()

  const [data, setData] = useState<FetchReposProps[]>([])

  useEffect(() => {
    fetchRepos().then((data) => setData(data))
  }, [])

  const titleAnimation = useSpring(useSpringHorizontalAnimation)

  const textAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 100
  })

  // const projectsTrail = useTrail(data.length, useTrailVerticalAnimation)

  const buttonsAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 200
  })

  const { github } = socialMedia

  return (
    <S.Page>
      <Carousel items={data} />

      <div className="content">
        <animated.h1 style={titleAnimation} className="c__title">
          <strong className="ct__highlight">Portfólio</strong>
        </animated.h1>

        <animated.p style={textAnimation} className="c__description">
          Veja e acesse meus projetos desenvolvidos e publicados em meu{' '}
          <a
            className="cd__link"
            href={github.url}
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

      {/* <div className="grid custom-scroll">
        {projectsTrail.map((animation, index) => (
          <animated.a
            key={data[index].id}
            style={animation}
            href={data[index].html_url}
            target="_blank"
            className="g__card"
          >
            <h2 className="gc__name">{data[index].name}</h2>
            <p className="gc__description">{data[index].description}</p>
          </animated.a>
        ))}
      </div> */}
    </S.Page>
  )
}

export default Portfolio
