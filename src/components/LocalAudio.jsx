import { motion } from 'framer-motion'
import { Headphones, Mic } from 'lucide-react'

export default function LocalAudio({ src, title, caption, speaker, className = '' }) {
  if (!src) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      <div className="rounded-2xl border border-honey-200 bg-gradient-to-br from-honey-50 via-white to-amber-50 shadow-lg overflow-hidden">
        <div className="px-6 pt-6 pb-4 flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-honey-100 border border-honey-200 flex items-center justify-center flex-shrink-0">
            <Headphones size={26} className="text-honey-700" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-honey-600 mb-1 flex items-center gap-1.5">
              <Mic size={12} />
              Audio
            </p>
            {speaker && (
              <p className="text-sm font-bold text-gray-800 leading-snug">{speaker}</p>
            )}
            {title && <p className="text-sm text-gray-600 mt-1">{title}</p>}
          </div>
        </div>

        <div className="px-6 pb-6">
          <audio
            controls
            preload="metadata"
            className="w-full h-11 rounded-xl"
            title={title || 'Reproducir audio'}
          >
            <source src={src} type="audio/mp4" />
            <source src={src} type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
          </audio>
        </div>
      </div>
      {caption && (
        <p className="text-xs text-gray-500 mt-3 leading-relaxed text-center md:text-left">{caption}</p>
      )}
    </motion.div>
  )
}
