import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Heart, Leaf, Wind, Home as HomeIcon } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import DoctorProfile from '../components/DoctorProfile'
import VideoEmbed from '../components/VideoEmbed'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'

const benefits = [
  { icon: Wind, title: 'Respiración natural', desc: 'Inhalación del microambiente de la colmena con vapores de miel, propóleo y compuestos bioactivos.' },
  { icon: Heart, title: 'Bienestar integral', desc: 'Enfoque holístico que combina terapias naturales con rigor profesional y acompañamiento personalizado.' },
  { icon: Leaf, title: 'Productos de la colmena', desc: 'Uso de miel, propóleo, jalea real, polen y veneno de abeja bajo valoración individualizada.' },
  { icon: HomeIcon, title: 'Atención domiciliaria', desc: 'Servicio de enfermería a domicilio en Valladolid con enfermero titulado y coordinación familiar.' },
]

const stats = [
  { value: '+500', label: 'Pacientes atendidos' },
  { value: '+10', label: 'Años de experiencia' },
  { value: '3', label: 'Centros Beecura en España' },
  { value: '100%', label: 'Valoración personalizada' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Beecura Tordesillas · Terapias Naturales · Dr. Bernardo J. Acosta</title>
        <meta name="description" content="Centro especializado en terapia con aire de colmena (dispositivo medical Beecura), apiterapia, control de peso con péptidos bioactivos y enfermería a domicilio en Valladolid. Dirigido por el Prof. Dr. Bernardo J. Acosta." />
        <meta name="keywords" content="aire de colmena, Beecura, apiterapia, apipuntura, terapia natural, enfermería a domicilio Valladolid, control de peso natural, péptidos bioactivos, Dr Bernardo Acosta, terapias alternativas Valladolid" />
        <link rel="canonical" href="https://beecura-tordesillas.com/" />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-warm-50 via-honey-50 to-amber-50 overflow-hidden">
        {/* Decoraciones de fondo */}
        <div className="absolute inset-0 bg-honeycomb opacity-40 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-honey-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-honey-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-honey-100 text-honey-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-honey-200"
            >
              🐝 Centro oficial Beecura · Tordesillas, Valladolid
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Respira{' '}
              <span className="text-gradient">salud natural</span>
              {' '}con terapias alternativas avanzadas
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Centro especializado en terapia respirando aire de colmena con dispositivo medical Beecura,
              apiterapia, control de peso, enfermería a domicilio y formación en bienestar natural.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/contacto" className="btn-primary text-base px-8 py-4">
                Reservar consulta
              </Link>
              <Link to="/aire-de-colmena" className="btn-secondary text-base px-8 py-4">
                Conocer terapias <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5">
              {['Valoración personalizada', 'Profesional titulado', 'Sin compromiso'].map(item => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle size={15} className="text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Hero card */}
            <div className="bg-white/80 backdrop-blur rounded-3xl border border-honey-100 shadow-xl p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-honey-100 rounded-2xl flex items-center justify-center text-3xl">🍯</div>
                <div>
                  <p className="font-bold text-gray-800">Aire de Colmena</p>
                  <p className="text-sm text-gray-500">Terapia respiratoria Beecura</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['🐝 Apiterapia', '🌿 Control de Peso', '🏠 Enfermería', '📚 Formación'].map(item => (
                  <div key={item} className="bg-warm-50 rounded-xl p-3 text-sm font-medium text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
              <div className="bg-honey-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Dirigido por</p>
                <p className="font-bold text-gray-800">Prof. MSc. Dr. Bernardo J. Acosta</p>
                <p className="text-xs text-honey-600">Doctor en Medicina · Especialista MTyN</p>
              </div>
            </div>

            {/* Stats mini */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(s => (
                <div key={s.label} className="bg-white/80 backdrop-blur rounded-2xl border border-warm-100 shadow-sm p-5 text-center">
                  <p className="text-3xl font-bold text-honey-600">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
        >
          <span className="text-xs">Descubre más</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* QUÉ ES BEECURA */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                eyebrow="Qué es Beecura"
                title="El aire de la colmena como terapia"
                subtitle="El dispositivo medical Beecura permite inhalar el microambiente natural del interior de una colmena activa: aire enriquecido con vapores de miel, propóleo, cera y compuestos bioactivos."
              />
              <div className="mt-8 space-y-4">
                {[
                  'Terapia no invasiva y relajante',
                  'Dispositivo con certificación medical',
                  'Sesiones guiadas y personalizadas',
                  'Acompañamiento profesional en cada sesión',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-honey-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-honey-600" />
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/aire-de-colmena" className="btn-primary">
                  Saber más sobre la terapia <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-honey-100 to-amber-50 rounded-3xl flex items-center justify-center border border-honey-200 shadow-lg overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4 animate-float">🐝</div>
                  <p className="font-bold text-2xl text-gray-800 mb-2">Dispositivo Beecura</p>
                  <p className="text-gray-500 text-sm">Microambiente de colmena controlado</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                    {['Propóleo', 'Miel', 'Cera', 'Enzimas', 'Polen', 'Compuestos'].map(p => (
                      <span key={p} className="bg-white/80 rounded-lg px-2 py-1.5 font-medium text-gray-700 border border-honey-100">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decoración hexagonal */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-honey-400 rounded-2xl opacity-20 rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-400 rounded-xl opacity-20 -rotate-6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-gradient-to-b from-warm-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Beneficios potenciales"
            title="Un enfoque de bienestar integral"
            subtitle="Las terapias naturales pueden apoyar el bienestar general como complemento a un estilo de vida saludable. Siempre bajo acompañamiento profesional."
            centered
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center card hover:border-honey-200"
              >
                <div className="w-14 h-14 bg-honey-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-honey-700" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <LegalDisclaimer className="max-w-2xl" />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Terapias y servicios de bienestar"
            subtitle="Cada tratamiento está diseñado de forma individual, con valoración previa y acompañamiento durante todo el proceso."
            centered
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PERFIL DOCTOR */}
      <DoctorProfile />

      {/* VÍDEO */}
      <section className="py-24 bg-gray-900 bg-honeycomb">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Vídeo destacado"
            title="Descubre la terapia en acción"
            subtitle="Conoce de primera mano cómo funciona el dispositivo Beecura y qué puedes esperar de una sesión de terapia con aire de colmena."
            centered
            light
          />
          <div className="mt-12">
            <VideoEmbed vimeoId="1163047347" title="Beecura - Terapia con aire de colmena" />
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Opiniones"
            title="Lo que dicen nuestros pacientes"
            subtitle="La confianza de quienes ya han experimentado nuestras terapias es nuestra mayor satisfacción."
            centered
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/opiniones" className="btn-secondary">
              Ver todas las opiniones
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-br from-honey-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-5xl mb-4">🐝</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Empieza tu camino hacia el bienestar natural
            </h2>
            <p className="text-honey-100 text-lg mb-8">
              Reserva tu valoración personalizada sin compromiso. El primer paso hacia una vida más saludable y equilibrada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-white text-honey-700 font-bold px-8 py-4 rounded-full hover:bg-honey-50 transition-colors shadow-lg"
              >
                Reservar consulta
              </Link>
              <a
                href="https://wa.me/525564452737?text=Hola,%20quiero%20saber%20más%20sobre%20las%20terapias"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-8 py-4"
              >
                💬 WhatsApp directo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
