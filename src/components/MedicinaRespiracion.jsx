import { motion } from 'framer-motion'
import { Wind } from 'lucide-react'
import SectionTitle from './SectionTitle'
import LocalVideo from './LocalVideo'
import LegalDisclaimer from './LegalDisclaimer'
import { medicinaRespiracion } from '../data/siteConfig'

export default function MedicinaRespiracion({ showVideo = true, className = '' }) {
  const { title, subtitle, paragraphs, video } = medicinaRespiracion

  return (
    <section className={`py-20 bg-gradient-to-b from-warm-50 to-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Salud y bienestar"
          title={title}
          subtitle={subtitle}
          centered
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {paragraphs.map((text, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-sm md:text-base">
                {text}
              </p>
            ))}
            <div className="flex items-start gap-3 bg-honey-50 rounded-2xl p-5 border border-honey-100">
              <Wind size={22} className="text-honey-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">
                En Beecura Tordesillas combinamos la respiración consciente con el{' '}
                <strong className="text-gray-800">Aire de Colmena</strong>: api-terapia natural
                respirando el microambiente enriquecido de la colmena.
              </p>
            </div>
            <LegalDisclaimer />
          </motion.div>

          {showVideo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <LocalVideo src={video.src} title={video.title} caption={video.caption} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
