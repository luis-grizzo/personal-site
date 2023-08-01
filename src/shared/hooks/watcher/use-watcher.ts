import { createContext, useContext } from 'react'

export type NextPath = '/' | '/portfolio' | '/contact' | null

type UseWatcherData = {
  nextPath: NextPath
  setNextPath: React.Dispatch<React.SetStateAction<NextPath>>
}

export const WatcherContext = createContext<UseWatcherData | undefined>(
  undefined
)

export const useWatcher = (): UseWatcherData => {
  const context = useContext(WatcherContext)

  if (!context)
    throw new Error(
      'useWatcher can only be called inside of a WatcherProvider component'
    )

  return context
}
