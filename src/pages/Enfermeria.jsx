import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, CheckCircle, Heart, Users, Clock, Shield } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import FAQ from '../components/FAQ'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { faqsEnfermeria } from '../data/faqs'

const nursingServices = [
  { emoji: '🩹', title: 'Curas y vendajes', desc: 'Curas de heridas, úlceras, cambios de apósito y vendajes compresivos realizados en el domicilio del paciente.' },
  { emoji: '💉', title: 'Inyectables', desc: 'Administración de medicación inyectable (intramuscular, subcutánea) prescrita por el médico.' },
  { emoji: '📊', title: 'Control de constantes', desc: 'Medición de tensión arterial, frecuencia cardíaca, saturación de oxígeno y temperatura.' },
  { emoji: '👁️', title: 'Seguimiento de pacientes', desc: 'Control evolutivo del paciente, registro de síntomas y comunicación con el equipo médico.' },
  { emoji: '🤝', title: 'Apoyo a personas mayores', desc: 'Atención cercana y personalizada para personas mayores que requieren asistencia sanitaria en el hogar.' },
  { emoji: '👨‍👩‍👧', title: 'Coordinación familiar', desc: 'Información y acompañamiento a la familia en el cuidado del paciente y gestión de la atención.' },
]

const advantages = [
  { icon: Shield, title: 'Enfermero titulado', desc: 'Profesional con titulación oficial y experiencia acreditada.' },
  { icon: Heart, title: 'Atención personalizada', desc: 'Trato cercano, adaptado a cada paciente y situación.' },
  { icon: Clock, title: 'Disponibilidad', desc: 'Servicio ágil y flexible, adaptado a tus horarios.' },
  { icon: Users, title: 'Coordinación familiar', desc: 'Comunicación constante con familia y médico de referencia.' },
]

export default function Enfermeria() {
  return (
    <>
      <Helmet>
        <title>Enfermería a Domicilio en Valladolid · Beecura Tordesillas</title>
        <meta name="description" content="Servicio de enfermería a domicilio en Valladolid. Enfermero titulado. Curas, inyectables, control de constantes, seguimiento y atención a personas mayores." />
        <meta name="keywords" content="enfermería a domicilio Valladolid, enfermero a domicilio, curas domicilio, inyectables domicilio, atención domiciliaria Valladolid" />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-200">
              🏠 Servicio en Valladolid
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              Enfermería a domicilio{' '}
              <span className="text-gradient">en Valladolid</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Servicio de enfermería con enfermero titulado. Atención sanitaria personalizada en la comodidad de tu hogar,
              en Valladolid y alrededores.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/525564452737?text=Hola,%20necesito%20información%20sobre%20enfermería%20a%20domicilio%20en%20Valladolid"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                Solicitar atención a domicilio
              </a>
              <a
                href="tel:+525564452737"
                className="btn-secondary text-base px-8 py-4"
              >
                <Phone size={16} />
                Llamar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                eyebrow="Quiénes somos"
                title="Atención sanitaria en tu hogar"
                subtitle="No siempre es posible o conveniente desplazarse. Nuestro servicio de enfermería lleva la atención profesional a tu domicilio."
              />
              <div className="mt-8 space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  El servicio se presta en <strong className="text-gray-800">colaboración con enfermero titulado de Cuida Valladolid</strong>,
                  garantizando profesionalidad, discreción y una atención de calidad.
                </p>
                <p className="leading-relaxed">
                  Ideal para personas mayores, pacientes en recuperación postoperatoria, personas con dificultades
                  de movilidad o cualquier situación que requiera atención sanitaria en el domicilio.
                </p>
              </div>
              <div className="mt-6 bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <p className="text-sm font-semibold text-blue-800 mb-1">🏥 Colaboración con</p>
                <p className="text-base font-bold text-gray-800">Cuida Valladolid</p>
                <p className="text-sm text-gray-600">Enfermería profesional titulada</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {advantages.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-blue-700" />
                  </div>
                  <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="¿Qué incluye?"
            title="Servicios de enfermería a domicilio"
            subtitle="Atención completa para la mayoría de necesidades de enfermería en el hogar."
            centered
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nursingServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card hover:border-blue-200"
              >
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionTitle
            eyebrow="Proceso"
            title="¿Cómo solicitar el servicio?"
            centered
          />
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Contacta con nosotros', desc: 'Llámanos o escríbenos por WhatsApp explicando qué necesitas y dónde estás ubicado.' },
              { num: '02', title: 'Confirmamos disponibilidad', desc: 'Te confirmamos disponibilidad, horarios y precio según el servicio requerido.' },
              { num: '03', title: 'El enfermero acude', desc: 'El profesional se desplaza a tu domicilio en el horario acordado con todo el material necesario.' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="card text-center"
              >
                <div className="text-4xl font-bold text-honey-200 mb-3">{step.num}</div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqsEnfermeria} title="Preguntas sobre Enfermería a Domicilio" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-honey-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Solicita atención de enfermería hoy</h2>
          <p className="text-blue-100 mb-8">Respuesta ágil. Profesional titulado. Valladolid y alrededores.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/525564452737?text=Hola,%20necesito%20atención%20de%20enfermería%20a%20domicilio%20en%20Valladolid"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-4 text-base font-bold"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+525564452737"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <Phone size={16} />
              Llamar: +52 55 6445 2737
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
