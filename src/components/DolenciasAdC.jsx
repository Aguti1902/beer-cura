import { motion } from 'framer-motion'
import { Wind } from 'lucide-react'
import BeecuraMark from './BeecuraMark'
import { dolenciasAdC } from '../data/siteConfig'

export default function DolenciasAdC({ compact = false }) {
  return (
    <section className={compact ? 'py-12 bg-honey-600' : 'py-16 md:py-20 bg-gradient-to-br from-honey-600 to-amber-600'}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/25">
            <Wind size={14} />
            Aire de Colmena (AdC)
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Gran eficacia terapéutica en
          </h2>
          <p className="mt-2 text-honey-100 text-sm md:text-base">
            <BeecuraMark className="text-white font-semibold" nowrap /> de Aire de Colmena
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {dolenciasAdC.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-0.75rem)] max-w-[220px] bg-white rounded-2xl px-4 py-5 md:py-6 text-center shadow-lg border border-honey-200/50"
            >
              <p className="text-sm md:text-base font-bold text-gray-800 leading-snug">
                {item.emphasis ? (
                  <>
                    <span className="text-honey-700">{item.emphasis}</span>
                    {item.rest}
                  </>
                ) : (
                  item.label
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
