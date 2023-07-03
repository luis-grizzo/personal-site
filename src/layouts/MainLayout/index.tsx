import { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { Link, NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { MdMenu } from 'react-icons/md'

import { sessionStorageKey } from 'shared/constants'

import { Home, Portfolio, Contact } from 'pages'

import { Button, Logo, Menu } from 'components'
import { menuItems } from 'components/Menu/menuItems'

import { theme } from 'styles/theme'

import * as S from './styles'

export interface MainLayoutProps {}

export type Pages = 'home' | 'portfolio' | 'contact'

const MainLayout = (): React.ReactElement => {
  const handleInitialPage = (): Pages => {
    const storage = sessionStorage.getItem(sessionStorageKey)

    return storage ? JSON.parse(storage) : 'home'
  }

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [activePage, setActivePage] = useState<Pages>(handleInitialPage)
  const [nextPage, setNextPage] = useState<Pages>(handleInitialPage)

  const navbarAnimation = useSpring({
    from: { transform: 'translateY(-300px)' },
    to: { transform: 'translateY(0px)' }
  })

  const page = {
    home: (
      <Home
        isActive={activePage === 'home' && nextPage === 'home'}
        requestChangePage={(newPage) => setNextPage(newPage)}
        onUnmount={() => setActivePage(nextPage)}
      />
    ),
    portfolio: <Portfolio />,
    contact: (
      <Contact
        isActive={activePage === 'contact' && nextPage === 'contact'}
        requestChangePage={(newPage) => setNextPage(newPage)}
        onUnmount={() => setActivePage(nextPage)}
      />
    )
  }[activePage]

  // const handleChangePage = (newPage: Pages): void => {
  //   setActivePage(newPage)
  // }

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
          <Button
            variant="ghost"
            onClick={() => setMenuIsOpen((prevState) => !prevState)}
          >
            <MdMenu size={30} className="wnclmb__icon" />
          </Button>
        </div>
      </animated.nav>

      {page}

      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </S.Wrapper>
  )
}

export default MainLayout
