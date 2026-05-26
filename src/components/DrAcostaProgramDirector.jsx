import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import { drAcosta } from '../data/siteConfig'

/** Solo para el programa de control de peso — no en Aire de Colmena ni apiterapia */
export default function DrAcostaProgramDirector({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-olive-50 rounded-2xl p-6 border border-olive-200">
        <p className="text-xs font-semibold uppercase tracking-wider text-olive-700 mb-2">Dirección del programa</p>
        <p className="font-bold text-gray-800">{drAcosta.shortName}</p>
        <p className="text-sm text-gray-600 mt-2">{drAcosta.role}</p>
        <p className="text-xs text-gray-500 mt-3 italic">{drAcosta.note}</p>
      </div>
    )
  }

  return (
    <section className="py-16 bg-olive-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-10 border border-olive-200 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-olive-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Scale size={24} className="text-olive-700" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-olive-700 mb-1">
                Dirección del programa
              </p>
              <h3 className="text-xl font-bold text-gray-800">{drAcosta.name}</h3>
              <p className="text-sm text-olive-800 font-medium mt-1">{drAcosta.role}</p>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">{drAcosta.note}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
