import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'

import * as S from './styles'

const Home = (): React.ReactElement => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <h1 className='w__title'>
        Olá, sou um <br />
        <strong className='wt__highlight'>Dev. Front-End</strong> & <br />
        <strong className='wt__highlight'>UI-Designer</strong>
      </h1>
      <p className="w__description">
        Me chamo <a href='https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-gaido-grizzo-2a957a1b2/' target='_blank' className='wd__link'>Luís Grizzo</a> e este é meu site! Aqui você pode conhecer um pouco sobre mim e encontrar todos os meus links para contato, obrigado pela visita!
      </p>
      <div className="w__button-wrapper">
        <Button variant='secondary' onClick={() => navigate('/about')}>
          Sobre mim
        </Button>
        <Button onClick={() => navigate('/contact')}>
          Entre em contato
        </Button>
      </div>
    </S.Wrapper>
  )
}

export default Home
