import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import GoogleReviewsSection from '../components/GoogleReviewsSection'
import { google } from '../data/siteConfig'

export default function Opiniones() {
  return (
    <>
      <Helmet>
        <title>Opiniones en Google Maps · Beecura Tordesillas</title>
        <meta
          name="description"
          content="Reseñas reales de usuarios de Beecura Tordesillas en Google Maps. Terapia con aire de colmena y apiterapia en Valladolid."
        />
      </Helmet>

      <section className="relative py-24 bg-gradient-to-br from-honey-50 to-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-honey-100 text-honey-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-honey-200">
              ⭐ Google Maps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
              Reseñas de nuestros usuarios
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Las opiniones que importan son las publicadas por personas reales en Google Maps.
            </p>
            <p className="text-sm text-gray-500">
              Consulta, comparte y deja tu experiencia con Beecura de Aire de Colmena.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <GoogleReviewsSection showTitle={false} showMap />
        </div>
      </section>

      <section className="py-12 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-gray-400 italic leading-relaxed">
            Las reseñas mostradas proceden de Google Maps cuando la integración está configurada.
            En cualquier caso, puedes ver todas las opiniones verificadas en{' '}
            <a href={google.reviewsUrl} target="_blank" rel="noopener noreferrer" className="text-honey-600 underline">
              Google Maps
            </a>
            . Los resultados individuales pueden variar. Las terapias no sustituyen el tratamiento médico convencional.
          </p>
        </div>
      </section>
    </>
  )
}
