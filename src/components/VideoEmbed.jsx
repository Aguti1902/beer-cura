import { motion } from 'framer-motion'

export default function VideoEmbed({ vimeoId = '1163047347', title = 'Vídeo Beecura' }) {
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
        src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&color=d97706&title=0&byline=0&portrait=0`}
        title={title}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </motion.div>
  )
}
