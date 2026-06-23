import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import BeecuraMark from '../components/BeecuraMark'
import { contact, whatsappUrl, site, apiterapeuta } from '../data/siteConfig'

const services = [
  { label: 'Aire de Colmena', href: '/aire-de-colmena' },
  { label: 'Apiterapia y Apipuntura', href: '/apiterapia' },
  { label: 'Control de Peso y Péptidos', href: '/control-de-peso' },
  { label: 'Dónde encontrarnos', href: '/donde-encontrarnos' },
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
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-honey-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🐝</span>
            <div>
              <BeecuraMark className="font-bold text-white text-lg leading-none" />
              <span className="text-xs text-honey-400 block">Tordesillas · Valladolid</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            {site.tagline}. {apiterapeuta.name}, {apiterapeuta.role.toLowerCase()}.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-honey-600 hover:bg-honey-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Reservar sesión
            </Link>
            <a
              href={whatsappUrl('Hola, me gustaría reservar una sesión de aire de colmena')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-gray-600 hover:border-green-500 hover:text-green-400 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              💬 WhatsApp
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
            <a href={contact.phoneHref} className="flex items-center gap-2 text-sm text-gray-400 hover:text-honey-400 transition-colors">
              <Phone size={13} className="text-honey-500" />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-honey-400 transition-colors">
              <Mail size={13} className="text-honey-500" />
              {contact.email}
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
