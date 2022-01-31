import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

import Logo from '../../components/Logo'
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
  return (
    <S.Wrapper>
      <nav className='w__navbar-container'>
        <Link to="/">
          <Logo />
        </Link>
        <div className="wnc__links">
          <a href="https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-gaido-grizzo-2a957a1b2/" target='_blank' aria-disabled className="wncl__link">
            <FaLinkedinIn size={30}/>
          </a>
          <a href="https://github.com/luis-grizzo" target='_blank' className="wncl__link">
            <FaGithub size={30}/>
          </a>
          <a href="https://www.instagram.com/luis_ozzirg/" target='_blank' className="wncl__link">
            <FaInstagram size={30}/>
          </a>
          <span className="wncl__divider" />
          <button type='button' className='wncl__menu-button'>
            <MdMenu size={30} className='wnclmb__icon' />
          </button>
        </div>
      </nav>
      <main className='w__main-container'>
        <article className="wmc__page">
          {children}
        </article>
        <aside className="wmc__aside">
          <div className="wmca__techs-wrapper">
            <img src={html5} alt="html 5" className='wmcatw__tech' />
            <img src={css3} alt="css 3" className='wmcatw__tech' />
            <img src={js} alt="javascript" className='wmcatw__tech' />
            <img src={ts} alt="typescript" className='wmcatw__tech' />
            <img src={react} alt="react" className='wmcatw__tech' />
          </div>
          <div className="wmca__portrait" />
        </aside>
      </main>
    </S.Wrapper>
  )
}

export default MainLayout
