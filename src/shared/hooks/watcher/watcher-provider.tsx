import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { WatcherContext, NextPath } from './use-watcher'

type WatcherProviderProps = {
  children: React.ReactNode
}

export const WatcherProvider = ({
  children
}: WatcherProviderProps): React.ReactElement => {
  const { pathname } = useLocation()

  const [nextPath, setNextPath] = useState<NextPath>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    nextPath && setNextPath(null)
  }, [pathname])

  return (
    <WatcherContext.Provider value={{ nextPath, setNextPath }}>
      {children}
    </WatcherContext.Provider>
  )
}
