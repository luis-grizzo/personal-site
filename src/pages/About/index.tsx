import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { Button, TextRender, TextProps } from 'components'

import { useSpringHorizontalAnimation } from 'shared/animations'
import { handlePageChange } from 'shared/utils'
import { socialMedia } from 'shared/constants'

import * as S from './styles'

const About = (): React.ReactElement => {
  const navigate = useNavigate()

  const titleAnimation = useSpring({ ...useSpringHorizontalAnimation })

  const buttonsAnimation = useSpring({
    ...useSpringHorizontalAnimation,
    delay: 100
  })

  const linkedin = socialMedia.find((item) => 'LinkedIn'.includes(item.name))

  const github = socialMedia.find((item) => 'Github'.includes(item.name))

  const texts: TextProps[] = [
    {
      id: 0,
      paragraph: (
        <>
          Olá! eu sou{' '}
          <a
            href={linkedin?.url}
            title={linkedin?.name}
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
            href={github?.url}
            title={github?.name}
            target="_blank"
            className="wt__highlight"
            rel="noreferrer"
          >
            Github
          </a>{' '}
          , uma plataforma de versionamento de código e comunidade de
          programadores.
        </>
      )
    }
  ]

  return (
    <>
      <span>aside</span>

      <S.Wrapper>
        <animated.h1 style={titleAnimation} className="w__title">
          <strong className="wt__highlight">Sobre</strong> Mim
        </animated.h1>

        <TextRender texts={texts} />

        {/* <animated.div style={buttonsAnimation} className="w__button-wrapper">
          <Button onClick={() => handlePageChange(navigate('/contact'))}>
            Contato
          </Button>

          <Button
            variant="secondary"
            onClick={() => handlePageChange(navigate('/'))}
          >
            Voltar para home
          </Button>
        </animated.div> */}
      </S.Wrapper>
    </>
  )
}

export default About
