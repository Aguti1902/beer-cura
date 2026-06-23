import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPinned } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import PuntoVentaCard from '../components/PuntoVentaCard'
import PageCta from '../components/PageCta'
import { puntosVenta } from '../data/siteConfig'

export default function DondeEncontrarnos() {
  return (
    <>
      <Helmet>
        <title>Dónde encontrarnos · Puntos de venta Beecura</title>
        <meta
          name="description"
          content="Puntos de venta y centros Beecura: Tordesillas, Herbolario de Paula y Vegg's en Valladolid capital."
        />
      </Helmet>

      <section className="relative py-24 bg-gradient-to-br from-olive-50 to-warm-50 overflow-hidden min-h-[40vh]">
        <div className="absolute inset-0 bg-honeycomb opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-olive-100 text-olive-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-olive-200">
              <MapPinned size={14} />
              Puntos de venta
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              Dónde encontrarnos
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Centro de terapia en Tordesillas y puntos de venta en la provincia y en Valladolid capital.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Ubicaciones"
            title="Nuestros puntos"
            subtitle="Beecura de Aire de Colmena en Tordesillas. Puntos de venta en herbolario y en la capital."
            centered
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {puntosVenta.map((punto, i) => (
              <PuntoVentaCard key={punto.id} punto={punto} index={i} />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-10 max-w-2xl mx-auto">
            Las sesiones de terapia con Aire de Colmena se realizan en{' '}
            <Link to="/contacto" className="text-honey-700 font-medium hover:underline">
              Beecura Tordesillas
            </Link>
            . Vegg&apos;s y el Herbolario de Paula son puntos de venta, no centros de tratamiento.
          </p>
        </div>
      </section>

      <PageCta
        title="¿Quieres reservar una sesión?"
        description="Contacta con Beecura Tordesillas para Aire de Colmena y apiterapia."
        whatsappMessage="Hola, quiero información sobre dónde encontrar Beecura"
      />
    </>
  )
}
