import { useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'

import { useWatcher, NextPath } from 'shared/hooks/watcher'

import { Button } from 'components'

import * as S from './styles'

import { menuItems } from './menuItems'

export type MenuProps = {
  isOpen: boolean
  onClose?: () => void
} & React.BaseHTMLAttributes<HTMLDivElement>

export const Menu = ({ isOpen, onClose }: MenuProps): React.ReactElement => {
  const { pathname } = useLocation()
  const { setNextPath } = useWatcher()

  const AnimatedWrapper = animated(S.Wrapper)

  const wrapperTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isOpen
  })

  const contentTransition = useTransition(isOpen, {
    from: { x: 500 },
    enter: { x: 0 },
    leave: { x: 500 },
    reverse: isOpen
  })

  const overlayTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isOpen
  })

  const handleLinkClick = (path: NextPath) => {
    onClose?.()

    setNextPath(path)
  }

  return wrapperTransition(
    (style, item) =>
      item && (
        <AnimatedWrapper styles={style}>
          {contentTransition(
            (style, item) =>
              item && (
                <animated.div style={style} className="w__content">
                  <Button variant="ghost" onClick={() => onClose?.()}>
                    <MdClose size={30} />
                  </Button>

                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.path as NextPath)}
                      className={`wc__item ${
                        pathname === item.path ? 'wc__item--active' : ''
                      }`}
                    >
                      {item.description}
                    </button>
                  ))}
                </animated.div>
              )
          )}

          {overlayTransition(
            (style, item) =>
              item && (
                <animated.div
                  style={style}
                  onClick={() => onClose?.()}
                  className="w__overlay"
                />
              )
          )}
        </AnimatedWrapper>
      )
  )
}
