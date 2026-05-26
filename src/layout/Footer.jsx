import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import { site, apiterapeuta } from '../data/siteConfig'

const services = [
  { label: 'Aire de Colmena', href: '/aire-de-colmena' },
  { label: 'Apiterapia y Apipuntura', href: '/apiterapia' },
  { label: 'Control de Peso y Péptidos', href: '/control-de-peso' },
  { label: "Vegg's Valladolid", href: '/veggs-valladolid' },
  { label: 'Beecura Europa', href: '/beecura-espana' },
]

const legal = [
  { label: 'Aviso Legal', href: '/aviso-legal' },
  { label: 'Política de Privacidad', href: '/privacidad' },
  { label: 'Opiniones', href: '/opiniones' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="bg-gradient-to-r from-honey-700 to-amber-600 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Beecura de Aire de Colmena — tu bienestar respiratorio
          </h2>
          <p className="text-honey-100 mb-6 text-sm md:text-base">
            Api-terapia natural respirando Aire de las Colmenas. Salud y medicina de la respiración.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/525564452737?text=Hola,%20me%20gustaría%20reservar%20una%20sesión%20de%20aire%20de%20colmena"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-honey-700 font-bold px-6 py-3 rounded-full hover:bg-honey-50 transition-colors shadow-md"
            >
              💬 WhatsApp
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🐝</span>
            <div>
              <span className="font-bold text-white text-lg block leading-none">Beecura</span>
              <span className="text-xs text-honey-400 block">Tordesillas · Valladolid</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            {site.tagline}. {apiterapeuta.name}, {apiterapeuta.role.toLowerCase()}.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-honey-700 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-honey-700 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-honey-700 rounded-full flex items-center justify-center transition-colors" aria-label="YouTube">
              <Youtube size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4">Servicios</h4>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s.href}>
                <Link to={s.href} className="text-sm text-gray-400 hover:text-honey-400 transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4">Información</h4>
          <ul className="space-y-2">
            {legal.map(l => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm text-gray-400 hover:text-honey-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4">Contacto</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin size={13} className="text-honey-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-400">{site.location}</span>
            </div>
            <a href="tel:+525564452737" className="flex items-center gap-2 text-sm text-gray-400 hover:text-honey-400 transition-colors">
              <Phone size={13} className="text-honey-500" />
              +52 55 6445 2737
            </a>
            <a href="tel:+525547325430" className="flex items-center gap-2 text-sm text-gray-400 hover:text-honey-400 transition-colors">
              <Phone size={13} className="text-honey-500" />
              +52 55 4732 5430
            </a>
            <a href="mailto:bermato2004@yahoo.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-honey-400 transition-colors">
              <Mail size={13} className="text-honey-500" />
              bermato2004@yahoo.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-3">
          <p className="text-xs text-gray-500 italic leading-relaxed text-center">
            Las terapias ofrecidas no sustituyen el diagnóstico ni tratamiento médico convencional.
            La información es orientativa. Consulta siempre con un profesional sanitario.
          </p>
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} {site.name} · {apiterapeuta.name} · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
