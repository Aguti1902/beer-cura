import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import LocationCard from '../components/LocationCard'
import EuropeStationsMap from '../components/EuropeStationsMap'
import { beecuraCenters } from '../data/services'

export default function BeecuraEspana() {
  return (
    <>
      <Helmet>
        <title>Beecura en España · Red de Centros de Terapia con Aire de Colmena</title>
        <meta name="description" content="Red de centros Beecura en España: Tordesillas (Valladolid), Asturias y Valdemanco (Madrid). Terapia respiratoria con aire de colmena." />
        <meta name="keywords" content="Beecura España, centros Beecura, aire de colmena España, apiterapia España, terapia natural red nacional" />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-honey-50 to-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-honey-100 text-honey-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-honey-200">
              🇪🇸 Red Beecura
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              Beecura en{' '}
              <span className="text-gradient">España</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
              Una red creciente de centros especializados en la terapia con aire de colmena mediante el dispositivo medical Beecura.
              Cada centro comparte los mismos valores de profesionalidad, naturaleza y bienestar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUÉ ES BEECURA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                eyebrow="El ecosistema"
                title="¿Qué es el sistema Beecura?"
                subtitle="Beecura es una red de centros comprometidos con la terapia natural con aire de colmena, unificados por el uso del dispositivo medical Beecura y un protocolo de calidad compartido."
              />
              <div className="mt-8 space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Cada centro Beecura opera con el <strong className="text-gray-800">mismo dispositivo medical certificado</strong> y sigue un protocolo de valoración y sesiones que garantiza la calidad y seguridad de cada experiencia.
                </p>
                <p className="leading-relaxed">
                  La red une entornos naturales únicos —desde el campo castellano hasta la costa asturiana o la sierra madrileña—
                  con la misma esencia: <strong className="text-gray-800">el microambiente terapéutico de la colmena</strong>.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-honey-100 to-amber-50 rounded-3xl p-8 text-center border border-honey-200"
            >
              <div className="text-7xl mb-4 animate-float">🇪🇸</div>
              <p className="font-bold text-2xl text-gray-800 mb-2">Red Beecura</p>
              <p className="text-gray-500 text-sm mb-6">Centros en España</p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="bg-white rounded-xl p-3 border border-honey-100">
                  <p className="font-bold text-honey-700 text-xl">3</p>
                  <p className="text-gray-500 text-xs">Centros</p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-honey-100">
                  <p className="font-bold text-honey-700 text-xl">3</p>
                  <p className="text-gray-500 text-xs">Provincias</p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-honey-100">
                  <p className="font-bold text-honey-700 text-xl">1</p>
                  <p className="text-gray-500 text-xs">Protocolo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CENTROS */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Localización"
            title="Centros Beecura en España"
            subtitle="Encuentra tu centro Beecura más cercano y reserva tu sesión."
            centered
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {beecuraCenters.map((center, i) => (
              <motion.div
                key={center.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <LocationCard center={center} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EuropeStationsMap />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-honey-600 to-amber-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Quieres abrir tu centro Beecura?</h2>
          <p className="text-honey-100 mb-8">Si estás interesado en integrarte en la red Beecura, contáctanos para más información.</p>
          <Link to="/contacto" className="inline-flex items-center gap-2 bg-white text-honey-700 font-bold px-8 py-4 rounded-full hover:bg-honey-50 transition-colors shadow-md">
            Contactar
          </Link>
        </div>
      </section>
    </>
  )
}
