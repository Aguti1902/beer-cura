import { motion } from 'framer-motion'
import {
  Activity,
  Brain,
  Droplets,
  HeartPulse,
  Moon,
  Sparkles,
  Wind,
} from 'lucide-react'
import BeecuraMark from './BeecuraMark'
import { dolenciasAdC } from '../data/siteConfig'

const icons = {
  wind: Wind,
  activity: Activity,
  'heart-pulse': HeartPulse,
  lungs: Activity,
  brain: Brain,
  moon: Moon,
  droplets: Droplets,
}

function DolenciaCard({ item, index }) {
  const Icon = icons[item.icon] || Sparkles

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-2xl p-5 md:p-6 shadow-lg shadow-amber-900/10 border border-white/80 overflow-hidden h-full flex flex-col"
    >
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-honey-400 via-amber-400 to-honey-500 opacity-80 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-honey-100 to-amber-50 border border-honey-200/80 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
          <Icon size={22} className="text-honey-700" strokeWidth={2} />
        </div>
        <div className="min-w-0 pt-0.5">
          {item.line2 ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-widest text-honey-700">{item.line1}</p>
              <p className="text-lg md:text-xl font-bold text-gray-900 uppercase leading-tight mt-1">{item.line2}</p>
            </>
          ) : (
            <p className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide leading-tight">{item.line1}</p>
          )}
        </div>
      </div>

      <p className="text-xs md:text-sm text-gray-500 leading-relaxed mt-auto border-t border-warm-100 pt-3">
        {item.hint}
      </p>
    </motion.article>
  )
}

export default function DolenciasAdC({ compact = false }) {
  const { intro, items } = dolenciasAdC
  const primary = items.slice(0, 4)
  const secondary = items.slice(4)

  return (
    <section
      className={
        compact
          ? 'py-14 bg-gradient-to-br from-honey-600 via-honey-600 to-amber-600'
          : 'py-20 md:py-24 bg-gradient-to-br from-honey-600 via-amber-600 to-honey-700 relative overflow-hidden'
      }
    >
      <div className="absolute inset-0 bg-honeycomb opacity-[0.12] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-white/25"
          >
            <Sparkles size={14} />
            Aire de Colmena · AdC
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight"
          >
            Gran eficacia terapéutica
            <span className="block text-honey-100 text-2xl md:text-3xl lg:text-4xl font-semibold mt-1">
              en salud respiratoria y bienestar
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-honey-50/95 leading-relaxed"
          >
            <BeecuraMark className="text-white font-semibold" nowrap /> de Aire de Colmena. {intro}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-4 md:mb-5">
          {primary.map((item, i) => (
            <DolenciaCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
          {secondary.map((item, i) => (
            <DolenciaCard key={item.id} item={item} index={i + 4} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-honey-100/80 italic mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          Terapia complementaria. No sustituye el diagnóstico ni tratamiento médico convencional.
        </motion.p>
      </div>
    </section>
  )
}
