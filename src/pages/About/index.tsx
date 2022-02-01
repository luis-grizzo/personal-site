import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'

import * as S from './styles'

const About = (): React.ReactElement => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <h1 className='w__title'>
        <strong className='wt__highlight'>Luís</strong> Otávio <br />
        Gaido <strong className='wt__highlight'>Grizzo</strong>
      </h1>

      <p className="w__text">
        Natural de Jaú, São Paulo, Brasil. Tive o primeiro contato com desenvolvimento web nas aulas do curso técnico integrado ao ensino médio, ao conhecer mais, me familiarizei e me apaixonando com este tão grande e belo mundo da programação!
      </p>

      <p className="w__text">
        Pretendendo trabalhar na área, ingressei na faculdade de tecnologia de Jaú, onde tive um conhecimento mais profundo e uma visão mais ampla de mundo da programação Frontend e suas diversas possibilidades.
      </p>

      <p className="w__text">
        Em 2019, consegui meu primeiro estágio na área, onde tive um grande desenvolvimento profissional e técnico, tendo o primeiro contato com as tecnologias mais avançadas do mercado e do dia-a-dia de uma empresa de tecnologia.
      </p>

      <p className="w__text">
        Em 2020, consegui meu primeiro cargo efetivo como desenvolvedor Frontend e venho desempenhando a função desde então, sempre estudando e me desafiando para me tornar um profissional cada vez melhor!
      </p>

      <Button onClick={() => navigate('/')}>Voltar para home</Button>
    </S.Wrapper>
  )
}

export default About
