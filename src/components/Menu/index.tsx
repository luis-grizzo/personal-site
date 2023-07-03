import { NavLink } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'

import { Button } from 'components'

import * as S from './styles'

import { menuItems } from './menuItems'

export type MenuProps = {
  isOpen: boolean
  onClose?: () => void
} & React.BaseHTMLAttributes<HTMLDivElement>

export const Menu = ({ isOpen, onClose }: MenuProps): React.ReactElement => {
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
    // onDestroyed: (isUnmounted) => console.log({ isUnmounted })
  })

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
                    <NavLink
                      key={item.id}
                      to={item.path}
                      onClick={() => onClose?.()}
                      className={({ isActive }) =>
                        `wc__item ${isActive ? 'wc__item--active' : ''}`
                      }
                    >
                      {item.description}
                    </NavLink>
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
