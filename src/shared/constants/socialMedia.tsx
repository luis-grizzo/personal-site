import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

export const socialMedia = {
  github: {
    name: 'Github',
    url: 'https://github.com/luis-grizzo',
    icon: <FaGithub />
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-gaido-grizzo-2a957a1b2/',
    icon: <FaLinkedinIn />
  },
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com/luis_ozzirg/',
    icon: <FaInstagram />
  },
  behance: {
    name: 'Behance',
    url: 'https://www.behance.net/luisgrizzo',
    icon: <FaBehance />
  },
  facebook: {
    name: 'Facebook',
    url: 'https://www.facebook.com/ozzirg.odiag/',
    icon: <FaFacebook />
  },
  email: {
    name: 'Email',
    url: 'mailto:luisoggrizzo@gmail.com',
    icon: <MdAlternateEmail />
  }
}
