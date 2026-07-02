import { motion } from 'framer-motion'
import { Wind } from 'lucide-react'
import SectionTitle from './SectionTitle'
import LocalAudio from './LocalAudio'
import LocalVideo from './LocalVideo'
import LegalDisclaimer from './LegalDisclaimer'
import { medicinaRespiracion } from '../data/siteConfig'

/** @param {'audio' | 'image'} media — audio en Aire de Colmena; imagen en inicio */
export default function MedicinaRespiracion({ media = 'audio', className = '' }) {
  const { title, subtitle, paragraphs, audio, video, image } = medicinaRespiracion

  return (
    <section className={`py-20 bg-gradient-to-b from-warm-50 to-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Salud y bienestar"
          title={title}
          subtitle={subtitle}
          centered={media === 'image'}
        />

        <div className={`mt-12 grid lg:grid-cols-2 gap-12 items-start ${media === 'image' ? '' : ''}`}>
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

          {media === 'audio' && (
            <LocalAudio
              src={audio.src}
              speaker={audio.speaker}
              title={audio.title}
              caption={audio.caption}
            />
          )}

          {media === 'image' && image?.src && (
            <motion.figure
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-honey-200 shadow-xl bg-honey-50"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
              {image.caption && (
                <figcaption className="px-5 py-4 text-sm text-gray-600 bg-white border-t border-honey-100">
                  {image.caption}
                </figcaption>
              )}
            </motion.figure>
          )}
        </div>

        {video?.src && (
          <div className="mt-16">
            <LocalVideo
              src={video.src}
              title={video.title}
              caption={video.caption}
            />
          </div>
        )}
      </div>
    </section>
  )
}
