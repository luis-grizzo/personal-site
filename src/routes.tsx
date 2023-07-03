import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Loading } from 'components'

const MainLayout = lazy(async () => await import('./layouts/MainLayout'))

const Router = (): React.ReactElement => {
  return (
    <BrowserRouter basename="/personal-site">
      <Suspense fallback={<Loading isChildren={false} />}>
        <Routes>
          <Route index element={<MainLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
