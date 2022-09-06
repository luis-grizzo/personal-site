import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { Frame, TextRender, TextProps, Button } from 'components'

import { useSpringHorizontalAnimation } from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { handlePageChange } from 'shared/utils'

import * as S from './styles'

const About = (): React.ReactElement => {
  const navigate = useNavigate()

  const titleAnimation = useSpring(useSpringHorizontalAnimation)

  const buttonsAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 100
  })

  const { linkedin, github } = socialMedia

  const texts: TextProps[] = [
    {
      id: 0,
      paragraph: (
        <>
          Olá! eu sou{' '}
          <a
            href={linkedin.url}
            title={linkedin.name}
            target="_blank"
            className="wt__highlight"
            rel="noreferrer"
          >
            Luís Grizzo
          </a>
          , desenvolvedor Frontend desde 2019, desenvolvo aplicações web
          utilizando HTML , CSS e a linguagem Javascript com o framework{' '}
          React.js , também utilizo a linguagem Typescript em meus projetos,
          visando trabalhar com as tecnologias mais modernas do mercado.
        </>
      )
    },
    {
      id: 1,
      paragraph: (
        <>
          Gosto também de desenvolver a interface dos meus projetos, aplicando
          os conceitos de UI-Design, para desenvolve-las, utilizo o Figma, um
          software de criação de interfaces de aplicações.
        </>
      )
    },
    {
      id: 2,
      paragraph: (
        <>
          Para ver meus projetos já desenvolvidos, te convido a acessar meu
          perfil no{' '}
          <a
            href={github.url}
            title={github.name}
            target="_blank"
            className="wt__highlight"
            rel="noreferrer"
          >
            Github
          </a>
          , uma plataforma de versionamento de código e comunidade de
          programadores.
        </>
      )
    }
  ]

  return (
    <S.Page>
      <Frame />

      <div className="wrapper">
        <animated.h1 style={titleAnimation} className="w__title">
          <strong className="wt__highlight">Sobre</strong> Mim
        </animated.h1>

        <TextRender texts={texts} />

        <animated.div style={buttonsAnimation} className="w__buttons-wrapper">
          <Button
            variant="primary"
            onClick={() => handlePageChange(navigate('/portfolio'))}
          >
            Meu portfólio
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

export default About
