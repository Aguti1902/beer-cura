import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoEmbed({
  vimeoId = '1163047347',
  title = 'Vídeo Beecura',
  facade = false,
  facadeLabel = 'Reproducir vídeo',
}) {
  const [playing, setPlaying] = useState(!facade)

  if (!playing) {
    return (
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        onClick={() => setPlaying(true)}
        className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex flex-col items-center justify-center gap-4 text-white hover:border-honey-500/50 transition-colors group"
        aria-label={facadeLabel}
      >
        <div className="w-16 h-16 rounded-full bg-honey-600 group-hover:bg-honey-500 flex items-center justify-center shadow-lg transition-colors">
          <Play size={28} className="ml-1" fill="currentColor" />
        </div>
        <p className="text-sm md:text-base font-medium text-gray-200 px-6 text-center max-w-lg">{title}</p>
      </motion.button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
      style={{ paddingBottom: '56.25%', height: 0 }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${facade ? 1 : 0}&color=d97706&title=0&byline=0&portrait=0`}
        title={title}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </motion.div>
  )
}
