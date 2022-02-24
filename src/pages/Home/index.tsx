import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import Button from 'components/Button'

import { useSpringHorizontalAnimation } from 'shared/animations'

import portrait from 'assets/portrait.png'

import * as S from './styles'

const Home = (): React.ReactElement => {
  const navigate = useNavigate()

  const imageAnimation = useSpring({
    from: {
      y: 300
    },
    to: {
      y: 0
    }
  })

  const titleAnimation = useSpring({
    ...useSpringHorizontalAnimation
  })
  const textAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 100
  })
  const buttonsAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 200
  })

  return (
    <>
      <S.Card>
        <animated.img
          style={imageAnimation}
          src={portrait}
          alt="Luís Grizzo"
          className="c__image"
        />
      </S.Card>

      <S.Wrapper>
        <animated.h1 style={titleAnimation} className="w__title">
          Olá, sou um <br />
          <strong className="wt__highlight">Dev. Front-End</strong> {'&'} <br />
          <strong className="wt__highlight">UI-Designer</strong>
        </animated.h1>

        <animated.p style={textAnimation} className="w__description">
          Me chamo{' '}
          <a
            href="https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-gaido-grizzo-2a957a1b2/"
            target="_blank"
            className="wd__link"
            rel="noreferrer"
          >
            Luís Grizzo
          </a>{' '}
          e este é meu site! conheça um pouco sobre meu trabalho e encontre meus
          links para contato, obrigado pela visita!
        </animated.p>

        <animated.div style={buttonsAnimation} className="w__button-wrapper">
          <Button onClick={() => navigate('/contact')}>Entre em contato</Button>

          <Button variant="secondary" onClick={() => navigate('/about')}>
            Sobre mim
          </Button>
        </animated.div>
      </S.Wrapper>
    </>
  )
}

export default Home
