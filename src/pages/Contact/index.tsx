import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { Button, Grid } from 'components'

import { useSpringHorizontalAnimation } from 'shared/animations'
import { handlePageChange } from 'shared/utils'
import { socialMedia } from 'shared/constants'

import * as S from './styles'

const Contact = (): React.ReactElement => {
  const navigate = useNavigate()

  const titleAnimation = useSpring({ ...useSpringHorizontalAnimation })

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
      <Grid items={socialMedia} />

      <S.Wrapper>
        <animated.h1 style={titleAnimation} className="w__title">
          <strong className="wt__highlight">Redes</strong> sociais
        </animated.h1>

        <animated.p style={textAnimation} className="w__description">
          Aqui você encontra todas as minhas redes sociais e formas de contato,
          será ótimo conversar com você!
        </animated.p>

        <animated.div style={buttonsAnimation} className="w__button-wrapper">
          <Button onClick={() => handlePageChange(navigate('/about'))}>
            Sobre Mim
          </Button>

          <Button
            variant="secondary"
            onClick={() => handlePageChange(navigate('/'))}
          >
            Voltar para home
          </Button>
        </animated.div>
      </S.Wrapper>
    </>
  )
}

export default Contact
