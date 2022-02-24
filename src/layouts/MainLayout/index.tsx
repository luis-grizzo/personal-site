import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

import Logo from 'components/Logo'
import Menu from 'components/Menu'

import * as S from './styles'

export interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navbarAnimation = useSpring({
    from: {
      y: -300
    },
    to: {
      y: 0
    }
  })

  return (
    <S.Wrapper>
      <animated.nav style={navbarAnimation} className="w__navbar">
        <Link to="/">
          <Logo />
        </Link>
        <div className="wn__link-wrapper">
          <a
            href="https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-gaido-grizzo-2a957a1b2/"
            target="_blank"
            className="wnlw__link"
            rel="noreferrer"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            href="https://github.com/luis-grizzo"
            target="_blank"
            className="wnlw__link"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/luis_ozzirg/"
            target="_blank"
            className="wnlw__link"
            rel="noreferrer"
          >
            <FaInstagram size={30} />
          </a>
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
