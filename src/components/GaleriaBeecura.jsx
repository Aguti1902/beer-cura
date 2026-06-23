import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import BeecuraMark from './BeecuraMark'
import { galeriaBeecura } from '../data/siteConfig'

export default function GaleriaBeecura({ title, subtitle }) {
  const defaultTitle = (
    <>
      <BeecuraMark className="font-bold" /> en imágenes
    </>
  )
  return (
    <section className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Galería"
          title={title || defaultTitle}
          subtitle={subtitle || 'Nuestras instalaciones y sesiones de Aire de Colmena en Tordesillas.'}
          centered
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galeriaBeecura.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card overflow-hidden p-0"
            >
              <div className="aspect-[4/3] overflow-hidden bg-honey-50">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
