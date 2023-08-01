import { useState, useEffect } from 'react'

import { ResizeContext } from './use-resize'

import { theme } from 'styles/theme'

type ResizeProviderProps = {
  children: React.ReactNode
}

export const ResizeProvider = ({
  children
}: ResizeProviderProps): React.ReactElement => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > theme.mediaquerys.laptopStart
  )

  const handleResize = (): void =>
    setIsDesktop(window.innerWidth > theme.mediaquerys.laptopStart)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [window.innerWidth])

  return (
    <ResizeContext.Provider value={{ isDesktop }}>
      {children}
    </ResizeContext.Provider>
  )
}
