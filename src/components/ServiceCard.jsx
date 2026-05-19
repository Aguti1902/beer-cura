import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={service.href}
        className="group block card hover:border-honey-200 transition-all duration-300 h-full"
      >
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-honey-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {service.shortDesc}
        </p>
        <ul className="space-y-1 mb-5">
          {service.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-honey-500 mt-0.5">✦</span>
              {b}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-honey-600 group-hover:gap-2 transition-all">
          Más información <ArrowRight size={14} />
        </span>
      </Link>
    </motion.div>
  )
}
