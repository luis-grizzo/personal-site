import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loading from './components/Loading'

const MainLayout = lazy(async () => await import('./layouts/MainLayout'))

const Home = lazy(async () => await import('./pages/Home'))
const About = lazy(async () => await import('./pages/About'))
const Contact = lazy(async () => await import('./pages/Contact'))

const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <MainLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
