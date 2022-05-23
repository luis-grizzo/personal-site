import { Link, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'

import { handlePageChange } from 'shared/utils'

import * as S from './styles'

import { menuItems } from './menuItems'

export type MenuProps = {
  isOpen: boolean
  onClose?: () => void
} & React.BaseHTMLAttributes<HTMLDivElement>

export const Menu = ({ isOpen, onClose }: MenuProps): React.ReactElement => {
  const { pathname } = useLocation()

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

  return wrapperTransition(
    (style, item) =>
      item && (
        <AnimatedWrapper styles={style}>
          {contentTransition(
            (style, item) =>
              item && (
                <animated.div style={style} className="w__content">
                  <button
                    type="button"
                    onClick={() => onClose?.()}
                    className="wc__close-button"
                  >
                    <MdClose size={30} />
                  </button>
                  {menuItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => handlePageChange(onClose?.())}
                    >
                      <span
                        className={`wc__item ${
                          pathname === item.path ? 'wc__item--active' : ''
                        }`}
                      >
                        {item.description}
                      </span>
                    </Link>
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
