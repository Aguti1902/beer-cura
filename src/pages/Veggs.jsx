import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, ExternalLink, ArrowRight, Leaf, Store } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import PageCta from '../components/PageCta'
import { veggs } from '../data/siteConfig'

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

      <section className="relative py-24 bg-gradient-to-br from-olive-50 to-warm-50 overflow-hidden min-h-[40vh]">
        <div className="absolute inset-0 bg-honeycomb opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-olive-100 text-olive-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-olive-200">
              <Leaf size={14} />
              Colaborador Beecura
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
              <SectionTitle eyebrow="Punto colaborador" title="En Valladolid capital" />
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 card">
                  <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Store size={22} className="text-olive-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Alimentación ecológica</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Espacio de referencia en la capital para conocer el enfoque Beecura, la medicina de la
                      respiración y el Aire de Colmena.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">{veggs.address}</p>
                    <p className="text-sm text-gray-500 mt-1">Valladolid</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a
                    href={veggs.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Abrir en Google Maps
                  </a>
                  <Link to="/contacto" className="btn-secondary inline-flex items-center justify-center gap-2">
                    Beecura Tordesillas <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-warm-200 shadow-lg bg-warm-50 min-h-[360px]">
              <iframe
                title={`Mapa ${veggs.name}`}
                src={veggs.mapEmbedUrl}
                className="w-full h-[360px] md:h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-olive-50/50 border-y border-olive-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            Desde Tordesillas coordinamos las sesiones de <strong className="text-gray-800">Beecura de Aire de Colmena</strong>.
            Vegg&apos;s es nuestro aliado en Valladolid ciudad para acercar la propuesta a quienes prefieren un punto en capital.
          </p>
          <Link
            to="/aire-de-colmena"
            className="inline-flex items-center gap-2 mt-6 text-olive-700 font-semibold hover:text-olive-800"
          >
            Conocer la terapia principal <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <PageCta
        title="¿Quieres más información?"
        description="Contacta con Beecura Tordesillas para sesiones de Aire de Colmena o apiterapia."
        whatsappMessage="Hola, quiero información sobre Vegg's y Beecura"
      />
    </>
  )
}
