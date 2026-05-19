import { motion } from 'framer-motion'
import { Award, BookOpen, Globe, Stethoscope } from 'lucide-react'

const credentials = [
  { icon: Stethoscope, text: 'Doctor en Medicina' },
  { icon: Award, text: 'Especialista de II Grado en Anatomía Humana' },
  { icon: Award, text: 'Especialista de II Grado y Máster en Medicina Tradicional y Natural' },
  { icon: BookOpen, text: 'Máster en Educación Médica' },
  { icon: BookOpen, text: 'Profesor Auxiliar' },
  { icon: Globe, text: 'Maestro de la Universidad Iberoamericana de Ciencias y Desarrollo Humano, México' },
  { icon: Globe, text: 'Embajador Internacional de COFEMITES' },
]

export default function DoctorProfile() {
  return (
    <section className="py-24 bg-gradient-to-br from-honey-50 to-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Foto / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decoración */}
              <div className="absolute -inset-4 bg-gradient-to-br from-honey-200 to-amber-100 rounded-3xl blur-xl opacity-60" />
              <div className="relative w-72 h-80 bg-gradient-to-br from-honey-100 to-warm-100 rounded-3xl border-2 border-honey-200 flex flex-col items-center justify-center shadow-xl">
                <div className="text-7xl mb-4">👨‍⚕️</div>
                <div className="text-center px-6">
                  <p className="text-sm font-semibold text-honey-700 uppercase tracking-wider">Prof. MSc. Dr.</p>
                  <p className="text-xl font-bold text-gray-800 mt-1">Bernardo J. Acosta</p>
                  <p className="text-xs text-gray-500 mt-2">Doctor en Medicina</p>
                </div>
                {/* Honeycomb decorative dots */}
                <div className="absolute top-4 right-4 flex gap-1">
                  <span className="w-2 h-2 bg-honey-300 rounded-full opacity-60" />
                  <span className="w-2 h-2 bg-honey-400 rounded-full opacity-60" />
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-honey-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                🐝 Embajador Beecura
              </div>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-honey-600">Quién nos dirige</span>
            <h2 className="section-title mt-2 mb-2">Prof. MSc. Dr. Bernardo Julián Acosta Martínez</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-honey-500 to-amber-400 rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-8">
              Médico con amplia trayectoria en medicina tradicional y natural, docencia universitaria e investigación en bienestar integral.
              Su enfoque combina el rigor científico con el respeto por las terapias naturales, aportando experiencia, humanidad y conocimiento a cada consulta.
            </p>

            <div className="space-y-3">
              {credentials.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-honey-100 rounded-full flex items-center justify-center mt-0.5">
                    <Icon size={14} className="text-honey-700" />
                  </div>
                  <p className="text-sm text-gray-700 leading-snug">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
