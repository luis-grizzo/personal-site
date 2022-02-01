import { Link, useLocation } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

import * as S from './styles'

import { menuItems } from './menuItems'

export type MenuProps = {
  isOpen: boolean
  onClose?: () => void
} & React.BaseHTMLAttributes<HTMLDivElement>

const Menu = ({ isOpen, onClose }: MenuProps): React.ReactElement => {
  const { pathname } = useLocation()

  return (
    <S.Wrapper isOpen={isOpen}>
      <div className="w__content">
        <button type='button' onClick={() => onClose?.()} className='wc__close-button'>
          <MdClose size={30} />
        </button>
        {menuItems.map((item, key) => (
          <Link key={key} to={item.path} onClick={() => onClose?.()}>
            <span className={`wc__item ${pathname === item.path ? 'wc__item--active' : ''}`}>{item.description}</span>
          </Link>
        ))}
      </div>
      <button type='button' onClick={() => onClose?.()} className="w__overlay" />
    </S.Wrapper>
  )
}
export default Menu
