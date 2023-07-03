import { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'

import { Button, Grid, ItemProps } from 'components'

import { useTransitionHorizontalAnimation } from 'shared/animations'
import { socialMedia } from 'shared/constants'
import { convertObjectToArray, handlePageChange } from 'shared/utils'

import { Pages } from 'layouts/MainLayout'

import * as S from './styles'

interface ContactProps {
  isActive: boolean
  requestChangePage: (newPage: Pages) => void
  onUnmount: () => void
}

interface ComponentStatusProps {
  component: 'title' | 'text' | 'buttons'
  isUnmounted: boolean
}

export const Contact = ({
  isActive,
  requestChangePage,
  onUnmount
}: ContactProps): React.ReactElement => {
  const [componentsStatus, setComponentsStatus] = useState<
    ComponentStatusProps[]
  >([
    {
      component: 'title',
      isUnmounted: false
    },
    {
      component: 'text',
      isUnmounted: false
    },
    {
      component: 'buttons',
      isUnmounted: false
    }
  ])

  const titleTransition = useTransition(isActive, {
    ...useTransitionHorizontalAnimation,
    reverse: isActive,
    onDestroyed: (isUnmounted) =>
      setComponentsStatus((prevState) => [
        ...prevState,
        { component: 'title', isUnmounted }
      ])
  })

  const textTransition = useTransition(isActive, {
    ...useTransitionHorizontalAnimation,
    delay: 100,
    reverse: isActive,
    onDestroyed: (isUnmounted) =>
      setComponentsStatus((prevState) => [
        ...prevState,
        { component: 'text', isUnmounted }
      ])
  })

  const buttonsTransition = useTransition(isActive, {
    ...useTransitionHorizontalAnimation,
    delay: 200,
    reverse: isActive,
    onDestroyed: (isUnmounted) =>
      setComponentsStatus((prevState) => [
        ...prevState,
        { component: 'buttons', isUnmounted }
      ])
  })

  const gridItems = convertObjectToArray<ItemProps>(socialMedia)

  useEffect(() => {
    componentsStatus.every(({ isUnmounted }) => isUnmounted === true) &&
      onUnmount()
  }, [componentsStatus])

  return (
    <S.Page>
      <Grid items={gridItems} />

      <div className="wrapper">
        {titleTransition(
          (style, item) =>
            item && (
              <animated.h1 style={style} className="w__title">
                <strong className="wt__highlight">Redes</strong> sociais
              </animated.h1>
            )
        )}

        {textTransition(
          (style, item) =>
            item && (
              <animated.p style={style} className="w__description">
                Aqui você encontra todas as minhas redes sociais e formas de
                contato, será ótimo conversar com você!
              </animated.p>
            )
        )}

        {buttonsTransition(
          (style, item) =>
            item && (
              <animated.div style={style} className="w__button-wrapper">
                <Button
                  onClick={() =>
                    handlePageChange(requestChangePage('portfolio'))
                  }
                >
                  Meu portfólio
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => handlePageChange(requestChangePage('home'))}
                >
                  Sobre mim
                </Button>
              </animated.div>
            )
        )}
      </div>
    </S.Page>
  )
}
