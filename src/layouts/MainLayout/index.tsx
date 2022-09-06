import { cloneElement, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { MdMenu } from 'react-icons/md'

import { ItemProps, Logo, Menu } from 'components'
import { menuItems } from 'components/Menu/menuItems'

import { socialMedia } from 'shared/constants'
import { convertObjectToArray } from 'shared/utils'
// import { useActivePage } from 'shared/hooks'
import { theme } from 'styles/theme'

import * as S from './styles'

export interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {
  // const { changePage } = useActivePage()
  // const { pathname } = useLocation()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= theme.mediaquerys.laptopStart
  )

  const navbarAnimation = useSpring({ from: { y: -300 }, to: { y: 0 } })

  // const menuItems = convertObjectToArray<ItemProps>(socialMedia)

  const handleMenu = (): void => {
    window.innerWidth >= theme.mediaquerys.laptopStart
      ? setIsDesktop(true)
      : setIsDesktop(false)
  }

  useEffect(() => {
    handleMenu()

    window.addEventListener('resize', handleMenu)

    return () => window.removeEventListener('resize', handleMenu)
  })

  return (
    <S.Wrapper>
      <animated.nav style={navbarAnimation} className="w__navbar">
        <Link to="/">
          <Logo />
        </Link>
        <div className="wn__link-wrapper">
          {/* {menuItems.map(
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
          )} */}

          {isDesktop ? (
            menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `wnlw__link ${isActive ? 'wnlw__link--active' : ''}`
                }
              >
                {item.description}
              </NavLink>
            ))
          ) : (
            <button
              type="button"
              onClick={() => setMenuIsOpen((prevState) => !prevState)}
              className="wnlw__menu-button"
            >
              <MdMenu size={30} className="wnclmb__icon" />
            </button>
          )}

          {/* <span className="wnlw__divider" /> */}
        </div>
      </animated.nav>

      {children}

      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </S.Wrapper>
  )
}

export default MainLayout
