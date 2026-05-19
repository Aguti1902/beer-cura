import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './layout/Layout'
import Home from './pages/Home'
import AireColmena from './pages/AireColmena'
import Apiterapia from './pages/Apiterapia'
import ControlPeso from './pages/ControlPeso'
import Enfermeria from './pages/Enfermeria'
import TallerEscuela from './pages/TallerEscuela'
import BeecuraEspana from './pages/BeecuraEspana'
import Opiniones from './pages/Opiniones'
import Contacto from './pages/Contacto'
import AvisoLegal from './pages/AvisoLegal'
import Privacidad from './pages/Privacidad'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aire-de-colmena" element={<AireColmena />} />
          <Route path="/apiterapia" element={<Apiterapia />} />
          <Route path="/control-de-peso" element={<ControlPeso />} />
          <Route path="/enfermeria-domicilio-valladolid" element={<Enfermeria />} />
          <Route path="/taller-escuela" element={<TallerEscuela />} />
          <Route path="/beecura-espana" element={<BeecuraEspana />} />
          <Route path="/opiniones" element={<Opiniones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="text-7xl">🐝</div>
      <h1 className="text-4xl font-bold text-gray-800">Página no encontrada</h1>
      <p className="text-gray-500 text-lg">La página que buscas no existe o ha sido movida.</p>
      <a href="/" className="btn-primary">Volver al inicio</a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
