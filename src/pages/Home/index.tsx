import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { Frame, Button } from 'components'

import { useSpringHorizontalAnimation } from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { handlePageChange } from 'shared/utils'

import * as S from './styles'

const Home = (): React.ReactElement => {
  const navigate = useNavigate()

  const titleAnimation = useSpring(useSpringHorizontalAnimation)

  const textAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 100
  })

  const buttonsAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 200
  })

  const { linkedin } = socialMedia

  return (
    <S.Page>
      <Frame />

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
          <Button onClick={() => handlePageChange(navigate('/portfolio'))}>
            Meu portfólio
          </Button>

          <Button
            variant="secondary"
            onClick={() => handlePageChange(navigate('/about'))}
          >
            Sobre mim
          </Button>
        </animated.div>
      </div>
    </S.Page>
  )
}

export default Home
