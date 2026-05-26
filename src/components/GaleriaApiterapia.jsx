import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { galeriaApiterapia } from '../data/siteConfig'

export default function GaleriaApiterapia() {
  return (
    <section className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Trayectoria"
          title="Formación y experiencia"
          subtitle="Imágenes de la práctica apiterapéutica y de la formación con docentes de referencia."
          centered
        />
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {galeriaApiterapia.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card overflow-hidden p-0"
            >
              <div className="aspect-[4/3] bg-honey-50 border-b border-warm-100 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4 text-sm text-gray-600 leading-snug">{item.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
