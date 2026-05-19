import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Terapias', href: '#',
    children: [
      { label: 'Aire de Colmena', href: '/aire-de-colmena' },
      { label: 'Apiterapia y Apipuntura', href: '/apiterapia' },
      { label: 'Control de Peso', href: '/control-de-peso' },
    ],
  },
  { label: 'Enfermería Domicilio', href: '/enfermeria-domicilio-valladolid' },
  { label: 'Formación', href: '/taller-escuela' },
  { label: 'Beecura España', href: '/beecura-espana' },
  { label: 'Opiniones', href: '/opiniones' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDropOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-warm-100' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">🐝</span>
            <div>
              <span className="font-bold text-gray-800 text-base md:text-lg leading-none block">Beecura</span>
              <span className="text-xs text-honey-600 leading-none block font-medium">Tordesillas</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
                  <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-honey-700 rounded-lg hover:bg-honey-50 transition-colors flex items-center gap-1">
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {dropOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-xl border border-warm-100 py-2 min-w-[220px] z-50"
                      >
                        {link.children.map(child => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-honey-50 hover:text-honey-700 transition-colors"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive ? 'text-honey-700 bg-honey-50' : 'text-gray-700 hover:text-honey-700 hover:bg-honey-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+525564452737" className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-honey-700 transition-colors">
              <Phone size={14} />
              <span className="font-medium">Llamar</span>
            </a>
            <a
              href="https://wa.me/525564452737?text=Hola,%20me%20gustaría%20reservar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Reservar consulta
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-honey-50 transition-colors"
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-warm-100 shadow-lg"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 pt-2 pb-1 text-xs font-bold uppercase tracking-widest text-gray-400">
                      {link.label}
                    </p>
                    {link.children.map(child => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm rounded-xl transition-colors ${
                            isActive ? 'bg-honey-50 text-honey-700 font-medium' : 'text-gray-700 hover:bg-honey-50'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm rounded-xl transition-colors ${
                        isActive ? 'bg-honey-50 text-honey-700 font-medium' : 'text-gray-700 hover:bg-honey-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <div className="pt-3 border-t border-warm-100 flex flex-col gap-2">
                <a
                  href="https://wa.me/525564452737?text=Hola,%20me%20gustaría%20reservar%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm justify-center"
                >
                  Reservar consulta
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
