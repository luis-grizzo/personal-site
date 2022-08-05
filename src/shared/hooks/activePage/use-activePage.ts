import { createContext, useContext } from 'react'

type UseActivePageData = {
  activePage: string
  setActivePage: (page: string) => void
  setIsAnimationEnd: (state: boolean) => void
}

export const ActivePageContext = createContext<UseActivePageData | undefined>(
  undefined
)

export const useActivePage = (): UseActivePageData => {
  const context = useContext(ActivePageContext)

  if (!context)
    throw new Error(
      'useActivePage can only be called inside of a ActivePageProvider component'
    )

  return context
}
