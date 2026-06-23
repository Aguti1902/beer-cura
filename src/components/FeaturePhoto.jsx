import { motion } from 'framer-motion'

export default function FeaturePhoto({
  src,
  alt,
  badge,
  aspect = 'aspect-square',
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-3xl overflow-hidden border border-honey-200 shadow-xl ${className}`}
    >
      <img src={src} alt={alt} className={`w-full object-cover ${aspect}`} loading="lazy" />
      {badge && (
        <div className="absolute bottom-4 right-4 bg-honey-600 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg">
          {badge}
        </div>
      )}
    </motion.div>
  )
}
