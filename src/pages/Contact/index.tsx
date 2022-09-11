import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { Button, Grid, ItemProps } from 'components'

import { useSpringHorizontalAnimation } from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { convertObjectToArray, handlePageChange } from 'shared/utils'

import * as S from './styles'

const Contact = (): React.ReactElement => {
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

  const gridItems = convertObjectToArray<ItemProps>(socialMedia)

  return (
    <S.Page>
      <Grid items={gridItems} />

      <div className="wrapper">
        <animated.h1 style={titleAnimation} className="w__title">
          <strong className="wt__highlight">Redes</strong> sociais
        </animated.h1>

        <animated.p style={textAnimation} className="w__description">
          Aqui você encontra todas as minhas redes sociais e formas de contato,
          será ótimo conversar com você!
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

export default Contact
