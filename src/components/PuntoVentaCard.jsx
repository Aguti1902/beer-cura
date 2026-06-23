import { ExternalLink, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PuntoVentaCard({ punto, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card overflow-hidden p-0 flex flex-col"
    >
      <div className="aspect-[16/10] bg-warm-100 border-b border-warm-100">
        <iframe
          title={`Mapa ${punto.name}`}
          src={punto.mapEmbedUrl}
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-olive-700 mb-1">{punto.role}</p>
          <h3 className="text-xl font-bold text-gray-800">{punto.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{punto.city}</p>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <MapPin size={16} className="text-honey-600 flex-shrink-0 mt-0.5" />
          {punto.address}
        </div>
        <a
          href={punto.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm justify-center mt-auto"
        >
          <ExternalLink size={15} />
          Abrir en Google Maps
        </a>
      </div>
    </motion.article>
  )
}
