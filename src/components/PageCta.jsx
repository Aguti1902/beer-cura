import { Link } from 'react-router-dom'

/**
 * CTA de cierre de página — diseño claro (sin banda naranja duplicada con el footer).
 */
export default function PageCta({
  title,
  description,
  primaryLabel = 'Reservar sesión',
  primaryHref = '/contacto',
  primaryExternal = false,
  whatsappMessage = 'Hola, me gustaría información sobre Beecura Aire de Colmena',
  showWhatsApp = true,
}) {
  const waUrl = `https://wa.me/525564452737?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="py-16 bg-warm-50 border-t border-honey-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{title}</h2>
        {description && (
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">{description}</p>
        )}
        <div className="flex flex-wrap justify-center gap-3">
          {primaryExternal ? (
            <a href={primaryHref} className="btn-primary text-base px-8 py-3.5">
              {primaryLabel}
            </a>
          ) : (
            <Link to={primaryHref} className="btn-primary text-base px-8 py-3.5">
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
