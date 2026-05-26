import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wind, Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import MedicinaRespiracion from '../components/MedicinaRespiracion'
import VideoBaoan from '../components/VideoBaoan'
import FAQ from '../components/FAQ'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { faqsAireColmena } from '../data/faqs'
import { apiterapeuta } from '../data/siteConfig'

const steps = [
  { num: '01', title: 'Valoración inicial', desc: 'Consulta previa para evaluar tu estado y adaptar el protocolo de respiración con Aire de Colmena a tus necesidades.' },
  { num: '02', title: 'Preparación', desc: 'Acondicionamiento del espacio y ajuste del dispositivo Beecura para la sesión. Ambiente tranquilo y controlado.' },
  { num: '03', title: 'Sesión de terapia', desc: 'Inhalación guiada del aire de colmena durante el tiempo establecido. Sesión relajante y no invasiva.' },
  { num: '04', title: 'Seguimiento', desc: 'Valoración posterior y ajuste del plan de sesiones según la evolución y sensaciones reportadas.' },
]

const benefitsList = [
  'Apoyo al bienestar del sistema respiratorio',
  'Ambiente rico en propóleo natural en aerosol',
  'Presencia de enzimas y compuestos bioactivos de la abeja',
  'Experiencia relajante y reconfortante',
  'Protocolo adaptado a cada persona',
  'Sesiones sin contraindicaciones para la mayoría de personas',
]

const forWhom = [
  { emoji: '🫁', label: 'Personas con sensación de congestión respiratoria' },
  { emoji: '😌', label: 'Quienes buscan momentos de relajación profunda' },
  { emoji: '🌿', label: 'Interesados en complementar su bienestar natural' },
  { emoji: '🛡️', label: 'Personas que quieren apoyar sus defensas naturales' },
  { emoji: '🧘', label: 'Adultos mayores con interés en terapias suaves' },
  { emoji: '🔬', label: 'Profesionales de la salud que quieren conocer la terapia' },
]

export default function AireColmena() {
  return (
    <>
      <Helmet>
        <title>Terapia Aire de Colmena · Dispositivo Beecura · Tordesillas</title>
        <meta name="description" content="Descubre la terapia con aire de colmena mediante el dispositivo medical Beecura en Tordesillas. Inhalación del microambiente natural de la colmena: propóleo, miel y compuestos bioactivos." />
        <meta name="keywords" content="aire de colmena, terapia Beecura, apiterapia respiratoria, propóleo aerosol, terapia natural Valladolid, Tordesillas" />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-honey-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
        <div className="absolute top-10 right-20 w-64 h-64 bg-honey-200/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-honey-100 text-honey-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-honey-200">
              🍯 Terapia principal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              Terapia con{' '}
              <span className="text-gradient">Aire de Colmena</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Beecura de Aire de Colmena: api-terapia natural respirando el microambiente de la colmena.
              Medicina de la respiración con técnicas conscientes enriquecidas con propóleo, miel y compuestos bioactivos.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contacto" className="btn-primary text-base px-8 py-4">
                Reservar sesión
              </Link>
              <a
                href="https://wa.me/525564452737?text=Hola,%20me%20interesa%20la%20terapia%20con%20aire%20de%20colmena"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                💬 Consultar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-honey-100 to-amber-50 rounded-3xl flex items-center justify-center border border-honey-200 shadow-lg">
                <div className="text-center p-10">
                  <div className="text-9xl animate-float">🍯</div>
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {['Propóleo', 'Miel', 'Enzimas', 'Cera', 'Polen', 'Agua'].map(p => (
                      <span key={p} className="bg-white/90 text-xs font-medium text-gray-700 px-3 py-1 rounded-full border border-honey-100 shadow-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-honey-600 text-white text-sm font-bold px-5 py-2.5 rounded-2xl shadow-lg">
                🐝 Dispositivo Medical
              </div>
            </motion.div>

            <div>
              <SectionTitle
                eyebrow="¿Qué es?"
                title="El microambiente natural de la colmena"
                subtitle="El interior de una colmena activa contiene un aire extraordinariamente rico en compuestos bioactivos generados por las abejas y sus productos."
              />
              <div className="mt-8 space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  El dispositivo <strong className="text-gray-800">medical Beecura</strong> es una tecnología que permite acercar ese microambiente a las personas de forma segura y controlada,
                  sin necesidad de estar en contacto directo con las abejas.
                </p>
                <p className="leading-relaxed">
                  El aire enriquecido con partículas de <strong className="text-gray-800">propóleo, miel, cera de abejas y otros compuestos</strong> se inhala en sesiones guiadas de respiración consciente,
                  con el acompañamiento de <strong className="text-gray-800">{apiterapeuta.name}</strong>, {apiterapeuta.role.toLowerCase()}.
                </p>
              </div>
              <div className="mt-8">
                <LegalDisclaimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Proceso"
            title="Cómo es una sesión"
            subtitle="Cada sesión está diseñada para que vivas una experiencia de bienestar completa, desde la valoración hasta el seguimiento."
            centered
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-honey-400 to-amber-400" />
                <div className="text-4xl font-bold text-honey-200 mb-3">{step.num}</div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle
                eyebrow="Beneficios potenciales"
                title="Lo que puede aportar esta terapia"
                subtitle="Basado en la experiencia acumulada y en los componentes naturales del aire de colmena."
              />
              <ul className="mt-8 space-y-3">
                {benefitsList.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={18} className="text-honey-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <LegalDisclaimer />
              </div>
            </div>

            <div>
              <SectionTitle
                eyebrow="¿Para quién?"
                title="Personas que pueden beneficiarse"
              />
              <div className="mt-8 grid grid-cols-1 gap-3">
                {forWhom.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 bg-honey-50 rounded-xl p-3 border border-honey-100"
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MedicinaRespiracion />

      <VideoBaoan />

      {/* SEGURIDAD */}
      <section className="py-20 bg-honey-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionTitle
            eyebrow="Seguridad"
            title="Tu seguridad es nuestra prioridad"
            subtitle="Todas las sesiones siguen el protocolo Beecura con valoración previa y acompañamiento profesional."
            centered
          />
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Valoración previa', desc: 'Evaluación médica antes de iniciar cualquier sesión.' },
              { icon: Users, title: 'Acompañamiento', desc: 'Supervisión profesional en cada sesión.' },
              { icon: Clock, title: 'Control del tiempo', desc: 'Duración adaptada a cada persona y sus necesidades.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="w-12 h-12 bg-honey-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-honey-700" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqsAireColmena} title="Preguntas sobre el Aire de Colmena" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-honey-600 to-amber-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Te gustaría probar la terapia?</h2>
          <p className="text-honey-100 mb-8">Reserva tu primera sesión con valoración personalizada incluida.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-white text-honey-700 font-bold px-8 py-4 rounded-full hover:bg-honey-50 transition-colors shadow-md">
              Reservar sesión <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/525564452737?text=Hola,%20quiero%20reservar%20una%20sesión%20de%20aire%20de%20colmena"
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
