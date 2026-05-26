import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { apiterapeuta } from '../data/siteConfig'

export default function ApiterapeutaProfile() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-honey-200 to-amber-100 rounded-3xl blur-xl opacity-60" />
              <div className="relative w-72 h-80 rounded-3xl border-2 border-honey-200 shadow-xl overflow-hidden bg-honey-100">
                <img
                  src={apiterapeuta.photo}
                  alt={`${apiterapeuta.name}, ${apiterapeuta.role}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-honey-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                🐝 Beecura Tordesillas
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-honey-600">Actividad principal</span>
            <h2 className="section-title mt-2 mb-2">{apiterapeuta.name}</h2>
            <p className="text-lg font-medium text-honey-700 mb-4">{apiterapeuta.role}</p>
            <div className="h-1 w-16 bg-gradient-to-r from-honey-500 to-amber-400 rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-6">{apiterapeuta.bio}</p>
            <div className="flex items-start gap-3 bg-warm-50 rounded-2xl p-4 border border-warm-100">
              <Award size={18} className="text-honey-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 leading-relaxed italic">{apiterapeuta.note}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
