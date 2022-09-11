import { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { Link, NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { MdMenu } from 'react-icons/md'

import { Button, Logo, Menu } from 'components'
import { menuItems } from 'components/Menu/menuItems'

import { theme } from 'styles/theme'

import * as S from './styles'

export interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= theme.mediaquerys.laptopStart
  )

  const navbarAnimation = useSpring({
    from: { transform: 'translateY(-300px)' },
    to: { transform: 'translateY(0px)' }
  })

  const handleMenu = (): void => {
    window.innerWidth >= theme.mediaquerys.laptopStart
      ? setIsDesktop(true)
      : setIsDesktop(false)
  }

  useEffect(() => {
    handleMenu()

    window.addEventListener('resize', handleMenu)

    return () => window.removeEventListener('resize', handleMenu)
  }, [])

  return (
    <S.Wrapper>
      <Helmet>
        <meta name="theme-color" content={theme.colors.primary} />
      </Helmet>

      <animated.nav style={navbarAnimation} className="w__navbar">
        <Link to="/">
          <Logo />
        </Link>

        <div className="wn__link-wrapper">
          {isDesktop ? (
            menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                title={`ir para ${item.description}`}
                className={({ isActive }) =>
                  `wnlw__link ${isActive ? 'wnlw__link--active' : ''}`
                }
              >
                {item.description}
              </NavLink>
            ))
          ) : (
            <Button
              variant="ghost"
              onClick={() => setMenuIsOpen((prevState) => !prevState)}
            >
              <MdMenu size={30} className="wnclmb__icon" />
            </Button>
          )}
        </div>
      </animated.nav>

      {children}

      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </S.Wrapper>
  )
}

export default MainLayout
