import { motion } from 'framer-motion'

export default function LocalVideo({ src, title, caption, poster, className = '' }) {
  if (!src) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      <div className="rounded-2xl overflow-hidden shadow-xl border border-warm-200 bg-gray-900">
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full aspect-video"
          title={title}
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta la reproducción de vídeo.
        </video>
      </div>
      {title && <p className="text-sm font-semibold text-gray-800 mt-4">{title}</p>}
      {caption && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{caption}</p>}
    </motion.div>
  )
}
