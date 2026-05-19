import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { testimonials } from '../data/testimonials'

function StarsRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-honey-400 text-honey-400" />
      ))}
    </div>
  )
}

const summary = [
  { label: '5 estrellas', count: 92, pct: 92 },
  { label: '4 estrellas', count: 6, pct: 6 },
  { label: '3 estrellas', count: 2, pct: 2 },
  { label: '2 estrellas', count: 0, pct: 0 },
  { label: '1 estrella', count: 0, pct: 0 },
]

export default function Opiniones() {
  return (
    <>
      <Helmet>
        <title>Opiniones y Reseñas · Beecura Tordesillas · Dr. Bernardo Acosta</title>
        <meta name="description" content="Lee las opiniones de nuestros pacientes sobre las terapias naturales de Beecura Tordesillas. Reseñas verificadas de personas reales." />
        <meta name="keywords" content="opiniones Beecura, reseñas apiterapia Valladolid, testimonios terapia natural, Dr Bernardo Acosta opiniones" />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-honey-50 to-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-honey-100 text-honey-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-honey-200">
              ⭐ Opiniones verificadas
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
              Lo que dicen nuestros pacientes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La experiencia de quienes ya han pasado por nuestras terapias es nuestra mejor carta de presentación.
            </p>

            {/* Rating resumen */}
            <div className="inline-flex flex-col items-center bg-white rounded-3xl shadow-md border border-warm-100 px-10 py-8 gap-3">
              <p className="text-6xl font-bold text-gray-800">4.9</p>
              <StarsRow />
              <p className="text-sm text-gray-500">Basado en +100 reseñas</p>
              <a
                href="https://www.google.com/search?q=Beecura+Tordesillas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-honey-600 hover:text-honey-700 transition-colors mt-1"
              >
                Ver reseñas en Google <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESGLOSE */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="space-y-3">
            {summary.map((row, i) => (
              <div key={row.label} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-20 flex-shrink-0">{row.label}</span>
                <div className="flex-1 bg-warm-100 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                    className="h-full bg-gradient-to-r from-honey-400 to-amber-400 rounded-full"
                  />
                </div>
                <span className="text-sm font-bold text-gray-700 w-8 text-right">{row.count}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Reseñas"
            title="Experiencias de nuestros pacientes"
            centered
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <StarsRow count={t.rating} />
                  <span className="text-xs text-gray-400">{t.date}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-warm-100">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${t.avatarColor}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/search?q=Beecura+Tordesillas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={16} />
              Ver todas las reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* NOTA */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-gray-400 italic">
            Las reseñas mostradas son testimonios reales de pacientes y clientes. Los resultados individuales pueden variar.
            Las terapias no sustituyen el diagnóstico ni tratamiento médico convencional.
          </p>
        </div>
      </section>
    </>
  )
}
