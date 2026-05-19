import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Award, Calendar, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const formats = [
  { icon: '🎓', title: 'Talleres prácticos', desc: 'Formación práctica en técnicas de medicina tradicional y natural. Grupos reducidos para un aprendizaje efectivo.' },
  { icon: '📢', title: 'Conferencias', desc: 'Ponencias y charlas divulgativas sobre apiterapia, bienestar natural y medicina tradicional, abiertas al público.' },
  { icon: '🔬', title: 'Seminarios especializados', desc: 'Seminarios de mayor profundidad para profesionales de la salud y alumnos con conocimientos previos.' },
  { icon: '💻', title: 'Formación mixta', desc: 'Combinación de sesiones presenciales y contenido online para adaptarse a tu disponibilidad.' },
]

const topics = [
  { emoji: '🍯', label: 'Apiterapia y productos de la colmena' },
  { emoji: '🌿', label: 'Medicina Tradicional y Natural' },
  { emoji: '🫁', label: 'Terapia con aire de colmena' },
  { emoji: '💆', label: 'Técnicas de bienestar integral' },
  { emoji: '🧠', label: 'Neurofisiología del estrés y bienestar' },
  { emoji: '🌱', label: 'Fitoterapia y plantas medicinales' },
  { emoji: '🏥', label: 'Bases de medicina natural para profesionales' },
  { emoji: '🧪', label: 'Péptidos bioactivos y regulación metabólica' },
]

const audiences = [
  { icon: Users, title: 'Profesionales sanitarios', desc: 'Médicos, enfermeros, fisioterapeutas y otros profesionales de la salud que quieren ampliar su formación.' },
  { icon: BookOpen, title: 'Estudiantes', desc: 'Estudiantes de ciencias de la salud o disciplinas afines que quieren profundizar en medicina natural.' },
  { icon: Award, title: 'Terapeutas', desc: 'Terapeutas naturales, masajistas y profesionales del bienestar que buscan formación específica.' },
  { icon: Users, title: 'Público general', desc: 'Cualquier persona interesada en el bienestar natural y las terapias alternativas para uso personal.' },
]

export default function TallerEscuela() {
  return (
    <>
      <Helmet>
        <title>Taller Escuela Dr. Bernardo Acosta · Formación en Medicina Natural</title>
        <meta name="description" content="Formación en medicina tradicional y natural, apiterapia y bienestar. Talleres prácticos, seminarios y conferencias del Prof. Dr. Bernardo J. Acosta." />
        <meta name="keywords" content="formación apiterapia, curso medicina natural, taller bienestar, seminario medicina tradicional, Dr Bernardo Acosta" />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-olive-50 to-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-olive-100 text-olive-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-olive-200">
              📚 Formación y Docencia
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              Taller Escuela{' '}
              <span className="text-gradient">Dr. Bernardo J. Acosta</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Formación de calidad en medicina tradicional y natural, apiterapia y bienestar integral.
              Para profesionales y personas interesadas en ampliar su conocimiento.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contacto" className="btn-primary text-base px-8 py-4">
                Consultar próximos talleres
              </Link>
              <a
                href="https://wa.me/525564452737?text=Hola,%20quiero%20información%20sobre%20los%20talleres%20de%20formación"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORMADOR */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-honey-50 to-amber-50 rounded-3xl p-10 border border-honey-200">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-honey-100 rounded-full flex items-center justify-center text-5xl mx-auto mb-4">👨‍🏫</div>
                <p className="font-bold text-gray-800">Prof. MSc. Dr.</p>
                <p className="font-bold text-xl text-honey-700">Bernardo J. Acosta</p>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Formador con trayectoria internacional</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El Dr. Acosta cuenta con más de una década de experiencia docente, habiendo impartido formación
                  en instituciones universitarias de México y España. Su formación incluye un <strong>Máster en Educación Médica</strong>
                  {' '}y es Maestro reconocido por la Universidad Iberoamericana de Ciencias y Desarrollo Humano.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Como <strong>Embajador Internacional de COFEMITES</strong>, participa activamente en la difusión de la
                  medicina tradicional y natural a nivel internacional, tanto en congresos como en actividades formativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMÁTICAS */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Contenidos"
            title="Áreas de formación"
            subtitle="Los talleres y seminarios cubren un amplio espectro de disciplinas relacionadas con el bienestar natural y la medicina tradicional."
            centered
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="card text-center hover:border-honey-200"
              >
                <div className="text-3xl mb-2">{topic.emoji}</div>
                <p className="text-sm font-medium text-gray-700 leading-tight">{topic.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATOS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Modalidades"
            title="Formatos de formación"
            subtitle="Diferentes formatos para adaptarse a tus necesidades y disponibilidad."
            centered
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((format, i) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{format.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{format.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{format.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="¿Para quién?"
            title="Formación para todos los perfiles"
            centered
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {audiences.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-honey-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-honey-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-olive-700 to-honey-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Te interesa la formación?</h2>
          <p className="text-green-100 mb-8">Consúltanos sobre próximos talleres, fechas y disponibilidad.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-white text-olive-700 font-bold px-8 py-4 rounded-full hover:bg-honey-50 transition-colors shadow-md">
              Consultar formación <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/525564452737?text=Hola,%20me%20interesa%20la%20formación%20del%20Taller%20Escuela"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
