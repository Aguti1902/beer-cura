import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle, centered = false, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? 'text-center' : ''}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-honey-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-gray-800'} ${centered ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle mt-4 ${light ? 'text-warm-100' : 'text-gray-500'} ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-honey-500 to-amber-400 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
