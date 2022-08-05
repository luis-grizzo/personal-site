import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ActivePageContext } from './use-activePage'

type ActivePageProviderProps = {
  children: React.ReactNode
}

export const ActivePageProvider = ({
  children
}: ActivePageProviderProps): React.ReactElement => {
  const navigate = useNavigate()

  const [activePage, setActivePage] = useState('/')
  const [isAnimationEnd, setIsAnimationEnd] = useState(false)

  useEffect(() => {
    if (isAnimationEnd) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      navigate(activePage)
      setIsAnimationEnd(false)
    }
  }, [isAnimationEnd])

  return (
    <ActivePageContext.Provider
      value={{ activePage, setActivePage, setIsAnimationEnd }}
    >
      {children}
    </ActivePageContext.Provider>
  )
}
