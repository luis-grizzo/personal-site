import { cloneElement, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { MdMenu } from 'react-icons/md'

import { Logo, Menu } from 'components'

import { socialMedia } from 'shared/constants'

import * as S from './styles'

export interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navbarAnimation = useSpring({ from: { y: -300 }, to: { y: 0 } })

  return (
    <S.Wrapper>
      <animated.nav style={navbarAnimation} className="w__navbar">
        <Link to="/">
          <Logo />
        </Link>
        <div className="wn__link-wrapper">
          {socialMedia.map(
            (item) =>
              ['Instagram', 'LinkedIn', 'Github'].includes(item.name) && (
                <a
                  key={item.name}
                  href={item.url}
                  title={item.name}
                  target="_blank"
                  className="wnlw__link"
                  rel="noreferrer"
                >
                  {cloneElement(item.icon, { size: 30 })}
                </a>
              )
          )}

          <span className="wnlw__divider" />

          <button
            type="button"
            onClick={() => setMenuIsOpen((prevState) => !prevState)}
            className="wnlw__menu-button"
          >
            <MdMenu size={30} className="wnclmb__icon" />
          </button>
        </div>
      </animated.nav>

      <main className="w__main">{children}</main>

      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </S.Wrapper>
  )
}

export default MainLayout
