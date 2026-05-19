import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card flex flex-col gap-4 h-full"
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-honey-400 text-honey-400" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-warm-100">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${testimonial.avatarColor}`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{testimonial.name}</p>
          <p className="text-xs text-gray-400">{testimonial.service} · {testimonial.date}</p>
        </div>
      </div>
    </motion.div>
  )
}
