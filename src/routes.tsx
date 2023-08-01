import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { WatcherProvider } from 'shared/hooks/watcher'
import { ResizeProvider } from 'shared/hooks/resize'

import { Loading } from 'components'

const MainLayout = lazy(async () => await import('./layouts/MainLayout'))

const Home = lazy(async () => await import('./pages/Home'))
const Contact = lazy(async () => await import('./pages/Contact'))
const Portifolio = lazy(async () => await import('./pages/Portfolio'))

const Router = (): React.ReactElement => {
  return (
    <BrowserRouter basename="/personal-site">
      <Suspense fallback={<Loading isChildren={false} />}>
        <WatcherProvider>
          <ResizeProvider>
            <MainLayout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portifolio />} />
              </Routes>
            </MainLayout>
          </ResizeProvider>
        </WatcherProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
