import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, ExternalLink, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { vegg } from '../data/siteConfig'

export default function Veggs() {
  return (
    <>
      <Helmet>
        <title>{veggs.name} · Colaborador Beecura · Valladolid</title>
        <meta
          name="description"
          content={`${veggs.name}: establecimiento colaborador y representante Beecura en Valladolid capital. ${veggs.address}`}
        />
      </Helmet>

      <section className="relative py-24 bg-gradient-to-br from-olive-50 to-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-olive-100 text-olive-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-olive-200">
              🌱 Colaborador Beecura
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              {veggs.name}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">{veggs.role}</p>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{veggs.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle eyebrow="Ubicación" title="Cómo llegar" />
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-olive-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{veggs.address}</p>
                </div>
                <a
                  href={veggs.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  <ExternalLink size={16} />
                  Abrir en Google Maps
                </a>
                <Link to="/contacto" className="inline-flex items-center gap-2 btn-secondary mt-2">
                  Contactar con Beecura Tordesillas <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-warm-200 shadow-lg aspect-square min-h-[300px]">
              <iframe
                title={`Mapa ${veggs.name}`}
                src={veggs.mapEmbedUrl}
                className="w-full h-full min-h-[300px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
