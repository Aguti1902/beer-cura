import { motion } from 'framer-motion'
import { ExternalLink, Home, Stethoscope } from 'lucide-react'
import { alessioMunzi, contact, whatsappUrl } from '../data/siteConfig'

export default function AlessioMunzi() {
  return (
    <section className="py-20 bg-amber-50/60 border-y border-amber-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-10 border border-amber-200 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Stethoscope size={28} className="text-amber-700" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
                Apiterapia con veneno de abeja
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{alessioMunzi.name}</h3>
              <p className="text-amber-800 font-medium mb-4">{alessioMunzi.role}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{alessioMunzi.bio}</p>

              <div className="flex items-start gap-3 bg-amber-50 rounded-xl p-4 border border-amber-100 mb-6">
                <Home size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-gray-800">Atención a domicilio</strong> en Valladolid capital y provincia
                  para apiterapia, apipuntura y terapias con productos de la colmena.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={alessioMunzi.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <ExternalLink size={16} />
                  {alessioMunzi.websiteLabel}
                </a>
                <a
                  href={whatsappUrl('Hola, quiero información sobre apiterapia con Alessio Munzi')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm"
                >
                  💬 WhatsApp {contact.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
