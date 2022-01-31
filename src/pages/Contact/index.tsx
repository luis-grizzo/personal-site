import { useNavigate } from 'react-router-dom'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import Button from '../../components/Button'

import * as S from './styles'

const Contact = (): React.ReactElement => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <h1 className='w__title'>
        <strong className='wt__highlight'>Redes</strong> sociais
      </h1>

      <p className="w__description">
        Aqui você encontra todas as minhas redes sociais, será ótimo conversar com você!
      </p>

      <div className="w__links-wrapper">
        <span className="wlw__item">
          <FaLinkedinIn size={50} />
        </span>
        <span className="wlw__item">
          <FaGithub size={50} />
        </span>
        <span className="wlw__item">
          <FaInstagram size={50} />
        </span>
      </div>

      <Button onClick={() => navigate('/')}>
        Voltar para home
      </Button>
    </S.Wrapper>
  )
}

export default Contact
