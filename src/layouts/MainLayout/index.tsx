import { useState } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { MdMenu } from 'react-icons/md'

import { Button, Logo, Menu } from 'components'

import { theme } from 'styles/theme'

import * as S from './styles'

export interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navbarAnimation = useSpring({
    from: { y: -300 },
    to: { y: 0 }
  })

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

      {children}

      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </S.Wrapper>
  )
}

export default MainLayout
