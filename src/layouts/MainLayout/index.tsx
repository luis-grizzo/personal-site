import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import IndianaDrag from 'react-indiana-drag-scroll'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

import Logo from '../../components/Logo'
import Menu from '../../components/Menu'

import * as S from './styles'

import html5 from '../../assets/html5.png'
import css3 from '../../assets/css3.png'
import js from '../../assets/javascript.png'
import ts from '../../assets/typescript.png'
import react from '../../assets/react.png'

export interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navbarStyle = useSpring({ from: { opacity: 0, y: -500 }, to: { opacity: 1, y: 0 } })

  const asideStyle = useSpring({ from: { opacity: 0, x: 500 }, to: { opacity: 1, x: 0 } })

  return (
    <S.Wrapper>
      <animated.nav style={navbarStyle} className='w__navbar'>
        <Link to="/" >
          <Logo />
        </Link>
        <div className="wn__link-wrapper">
          <a href="https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-gaido-grizzo-2a957a1b2/" target='_blank' className="wnlw__link">
            <FaLinkedinIn size={30}/>
          </a>
          <a href="https://github.com/luis-grizzo" target='_blank' className="wnlw__link">
            <FaGithub size={30}/>
          </a>
          <a href="https://www.instagram.com/luis_ozzirg/" target='_blank' className="wnlw__link">
            <FaInstagram size={30}/>
          </a>
          <span className="wnl__divider" />
          <button type='button' onClick={() => setMenuIsOpen(prevState => !prevState)} className='wnl__menu-button'>
            <MdMenu size={30} className='wnclmb__icon' />
          </button>
        </div>
      </animated.nav>
      <main className='w__main'>
        <IndianaDrag
          horizontal={false}
          className='wm__page'
        >
          {children}
        </IndianaDrag>
        <animated.aside style={asideStyle} className="wm__aside">
          <div className="wma__techs-wrapper">
            <img src={html5} alt="html 5" className='wmatw__tech' />
            <img src={css3} alt="css 3" className='wmatw__tech' />
            <img src={js} alt="javascript" className='wmatw__tech' />
            <img src={ts} alt="typescript" className='wmatw__tech' />
            <img src={react} alt="react" className='wmatw__tech' />
          </div>
          <div className="wma__portrait" />
        </animated.aside>
      </main>
      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </S.Wrapper>
  )
}

export default MainLayout
