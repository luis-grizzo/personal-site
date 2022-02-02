import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import IndianaDrag from 'react-indiana-drag-scroll'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import Button from '../../components/Button'

import * as S from './styles'

const Contact = (): React.ReactElement => {
  const navigate = useNavigate()

  const AnimatedWrapper = animated(S.Wrapper)

  const style = useSpring({ from: { opacity: 0, scale: 0 }, to: { opacity: 1, scale: 1 } })

  return (
    <AnimatedWrapper style={style}>
      <h1 className='w__title'>
        <strong className='wt__highlight'>Redes</strong> sociais
      </h1>

      <p className="w__description">
        Aqui você encontra todas as minhas redes sociais, será ótimo conversar com você!
      </p>

      <IndianaDrag vertical={false} className="w__links-wrapper">
        <a href='https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-gaido-grizzo-2a957a1b2/' target='_blank' className="wlw__item">
          <FaLinkedinIn size={50} />
        </a>
        <a href='https://github.com/luis-grizzo' target='_blank' className="wlw__item">
          <FaGithub size={50} />
        </a>
        <a href='https://www.instagram.com/luis_ozzirg/' target='_blank' className="wlw__item">
          <FaInstagram size={50} />
        </a>
      </IndianaDrag>

      <Button onClick={() => navigate('/')}>
        Voltar para home
      </Button>
    </AnimatedWrapper>
  )
}

export default Contact
