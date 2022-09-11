import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Loading } from 'components'

const MainLayout = lazy(async () => await import('./layouts/MainLayout'))

const Home = lazy(async () => await import('./pages/Home'))
const About = lazy(async () => await import('./pages/About'))
const Contact = lazy(async () => await import('./pages/Contact'))
const Portifolio = lazy(async () => await import('./pages/Portfolio'))

const Router = (): React.ReactElement => {
  return (
    <BrowserRouter basename="/personal-site">
      <Suspense fallback={<Loading isChildren={false} />}>
        <MainLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portifolio />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
