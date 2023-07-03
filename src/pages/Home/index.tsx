import { useState, useEffect } from 'react'
import { animated, useTransition } from 'react-spring'

import { Frame, Button } from 'components'

import { useTransitionHorizontalAnimation } from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { handlePageChange, convertObjectToArray } from 'shared/utils'

import { Pages } from 'layouts/MainLayout'

import * as S from './styles'

interface HomeProps {
  isActive: boolean
  requestChangePage: (newPage: Pages) => void
  onUnmount: () => void
}

export const Home = ({
  isActive,
  requestChangePage,
  onUnmount
}: HomeProps): React.ReactElement => {
  const [componentsStatus, setComponentsStatus] = useState({
    title: {
      isUnmounted: false
    },
    text: {
      isUnmounted: false
    },
    buttons: {
      isUnmounted: false
    }
  })

  const titleTransition = useTransition(isActive, {
    ...useTransitionHorizontalAnimation,
    reverse: isActive,
    onDestroyed: (isUnmounted) =>
      setComponentsStatus((prevState) => ({
        ...prevState,
        title: { isUnmounted }
      }))
  })

  const textTransition = useTransition(isActive, {
    ...useTransitionHorizontalAnimation,
    delay: 100,
    reverse: isActive,
    onDestroyed: (isUnmounted) =>
      setComponentsStatus((prevState) => ({
        ...prevState,
        text: { isUnmounted }
      }))
  })

  const buttonsTransition = useTransition(isActive, {
    ...useTransitionHorizontalAnimation,
    delay: 200,
    reverse: isActive,
    onDestroyed: (isUnmounted) =>
      setComponentsStatus((prevState) => ({
        ...prevState,
        buttons: { isUnmounted }
      }))
  })

  const { linkedin } = socialMedia

  useEffect(() => {
    const {
      title: { isUnmounted: titleIsUnmounted },
      text: { isUnmounted: textIsUnmounted },
      buttons: { isUnmounted: buttonsIsUnmounted }
    } = componentsStatus

    const shouldCallUnmount =
      titleIsUnmounted && textIsUnmounted && buttonsIsUnmounted

    console.log({
      shouldCallUnmount,
      componentsStatus
    })

    shouldCallUnmount && onUnmount()
  }, [componentsStatus])

  return (
    <S.Page>
      <Frame />

      <div className="wrapper">
        {titleTransition(
          (style, item) =>
            item && (
              <animated.h1 style={style} className="w__title">
                Olá, sou um <br />
                <strong className="wt__highlight">Dev. Front-End</strong> {'&'}{' '}
                <br />
                <strong className="wt__highlight">UI-Designer</strong>
              </animated.h1>
            )
        )}

        {textTransition(
          (style, item) =>
            item && (
              <animated.p style={style} className="w__description">
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
                e este é meu site! Conheça um pouco sobre meu trabalho, veja
                meus projetos e encontre meus links para contato! Obrigado pela
                visita!
              </animated.p>
            )
        )}

        {buttonsTransition(
          (style, item) =>
            item && (
              <animated.div style={style} className="w__button-wrapper">
                <Button
                  onClick={() => {
                    console.log('requestChangePage')
                    handlePageChange(requestChangePage('portfolio'))
                  }}
                >
                  Meu portfólio
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => handlePageChange(requestChangePage('contact'))}
                >
                  Contato
                </Button>
              </animated.div>
            )
        )}
      </div>
    </S.Page>
  )
}
