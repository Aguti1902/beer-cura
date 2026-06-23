import { Link } from 'react-router-dom'
import { whatsappUrl } from '../data/siteConfig'

/** CTA de cierre de página — fondo naranja en todas las páginas */
export default function PageCta({
  title,
  description,
  primaryLabel = 'Reservar sesión',
  primaryHref = '/contacto',
  primaryExternal = false,
  whatsappMessage = 'Hola, me gustaría información sobre Beecura Aire de Colmena',
  showWhatsApp = true,
}) {
  const waUrl = whatsappUrl(whatsappMessage)

  const primaryClass =
    'inline-flex items-center justify-center gap-2 bg-white text-honey-700 font-bold px-8 py-3.5 rounded-full hover:bg-honey-50 transition-colors shadow-md text-base'

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-honey-600 to-amber-600 overflow-hidden">
      <div className="absolute inset-0 bg-honeycomb opacity-10 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
        {description && (
          <p className="text-honey-100 text-base md:text-lg mb-8 leading-relaxed">{description}</p>
        )}
        <div className="flex flex-wrap justify-center gap-3">
          {primaryExternal ? (
            <a href={primaryHref} className={primaryClass}>
              {primaryLabel}
            </a>
          ) : (
            <Link to={primaryHref} className={primaryClass}>
              {primaryLabel}
            </Link>
          )}
          {showWhatsApp && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-3.5"
            >
              💬 WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
