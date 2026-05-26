import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Heart, Leaf, Wind } from 'lucide-react'
import PageCta from '../components/PageCta'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import ApiterapeutaProfile from '../components/ApiterapeutaProfile'
import MedicinaRespiracion from '../components/MedicinaRespiracion'
import GoogleReviewsSection from '../components/GoogleReviewsSection'
import EuropeStationsMap from '../components/EuropeStationsMap'
import VideoEmbed from '../components/VideoEmbed'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { services } from '../data/services'
import { site, apiterapeuta } from '../data/siteConfig'

const benefits = [
  { icon: Wind, title: 'Medicina de la respiración', desc: 'Técnicas largas y lentas, abiertas a todo el mundo, potenciadas con el Aire de Colmena.' },
  { icon: Heart, title: 'Beecura de Aire de Colmena', desc: 'Api-terapia natural respirando el microambiente enriquecido: propóleo, miel y compuestos bioactivos.' },
  { icon: Leaf, title: 'Apiterapia y apipuntura', desc: 'Productos de la colmena y técnicas avanzadas con formación internacional de referencia.' },
  { icon: CheckCircle, title: 'Red Beecura Europa', desc: 'Estaciones en Alemania, Austria y España con el mismo sistema y protocolo de calidad.' },
]

const stats = [
  { value: '★', label: 'Terapia principal' },
  { value: 'AdC', label: 'Aire de Colmena' },
  { value: 'EU', label: 'Red europea Beecura' },
  { value: '100%', label: 'Sesiones guiadas' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Beecura Tordesillas · Aire de Colmena · Medicina de la Respiración</title>
        <meta
          name="description"
          content="Beecura de Aire de Colmena en Tordesillas: api-terapia natural respirando Aire de las Colmenas. Salud y medicina de la respiración, apiterapia y apipuntura."
        />
        <meta
          name="keywords"
          content="aire de colmena, Beecura, medicina de la respiración, apiterapia, apipuntura, api-terapia, Tordesillas, Valladolid, Ramón Regalado"
        />
        <link rel="canonical" href="https://beecura-tordesillas.com/" />
      </Helmet>

      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-warm-50 via-honey-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-40 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-honey-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
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
              🐝 {site.tagline}
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              <span className="text-gradient">Beecura</span>
              {' '}de Aire de Colmena
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Salud y medicina de la respiración. Nuestra actividad principal es la api-terapia natural
              respirando el Aire de las Colmenas con el dispositivo medical Beecura, en Tordesillas (Valladolid).
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/aire-de-colmena" className="btn-primary text-base px-8 py-4">
                Conocer la terapia principal
              </Link>
              <Link to="/contacto" className="btn-secondary text-base px-8 py-4">
                Reservar sesión <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-5">
              {['Aire de Colmena', 'Respiración consciente', 'Apiterapeuta titulado'].map(item => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle size={15} className="text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="bg-white/80 backdrop-blur rounded-3xl border border-honey-100 shadow-xl p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-honey-100 rounded-2xl flex items-center justify-center text-3xl">🍯</div>
                <div>
                  <p className="font-bold text-gray-800">Aire de Colmena</p>
                  <p className="text-sm text-gray-500">Actividad principal · Beecura</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['🫁 Medicina respiración', '🐝 Apiterapia', '🌿 Control de peso', "🌱 Vegg's Valladolid"].map(item => (
                  <div key={item} className="bg-warm-50 rounded-xl p-3 text-sm font-medium text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
              <div className="bg-honey-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Apiterapeuta</p>
                <p className="font-bold text-gray-800">{apiterapeuta.name}</p>
                <p className="text-xs text-honey-600">{apiterapeuta.role}</p>
              </div>
            </div>

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
      </section>

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
                  'Sesiones de respiración consciente guiadas',
                  'Compuestos de la colmena en aerosol',
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
                  Saber más <ArrowRight size={16} />
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
            </motion.div>
          </div>
        </div>
      </section>

      <MedicinaRespiracion media="image" />

      <section className="py-24 bg-gradient-to-b from-warm-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Beneficios potenciales"
            title="Salud y medicina de la respiración"
            subtitle="La respiración reparadora, enriquecida con el Aire de Colmena, puede apoyar el bienestar general como complemento a un estilo de vida saludable."
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

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Servicios"
            title="Terapias y puntos de referencia"
            subtitle="Beecura de Aire de Colmena es la actividad principal. También apiterapia, programa de control de peso y colaboración con Vegg's en Valladolid."
            centered
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ApiterapeutaProfile />

      <section className="py-24 bg-gray-900 bg-honeycomb">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Vídeo"
            title="Beecura de Aire de Colmena en acción"
            subtitle="Conoce el dispositivo Beecura y una sesión de terapia respirando el microambiente de la colmena."
            centered
            light
          />
          <div className="mt-12">
            <VideoEmbed vimeoId="1163047347" title="Beecura - Terapia con aire de colmena" />
          </div>
        </div>
      </section>

      <EuropeStationsMap />

      <section className="py-24 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <GoogleReviewsSection />
          <div className="mt-10 text-center">
            <Link to="/opiniones" className="btn-secondary">
              Página de opiniones
            </Link>
          </div>
        </div>
      </section>

      <PageCta
        title="Respira el Aire de la Colmena"
        description="Reserva tu sesión de Beecura de Aire de Colmena. Medicina de la respiración en Tordesillas."
        whatsappMessage="Hola, quiero información sobre Beecura Aire de Colmena"
      />
    </>
  )
}
