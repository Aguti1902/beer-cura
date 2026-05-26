import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'

const contactData = [
  {
    icon: Phone,
    label: 'Teléfono 1',
    value: '+52 55 6445 2737',
    href: 'tel:+525564452737',
    color: 'bg-honey-100 text-honey-700',
  },
  {
    icon: Phone,
    label: 'Teléfono 2',
    value: '+52 55 4732 5430',
    href: 'tel:+525547325430',
    color: 'bg-honey-100 text-honey-700',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'bermato2004@yahoo.com',
    href: 'mailto:bermato2004@yahoo.com',
    color: 'bg-olive-100 text-olive-700',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Tordesillas, Valladolid, España',
    href: 'https://maps.google.com/?q=Tordesillas,Valladolid',
    color: 'bg-amber-100 text-amber-700',
  },
]

export default function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto · Beecura Tordesillas · Reservar Consulta</title>
        <meta name="description" content="Contacta con Beecura Tordesillas. Reserva sesión de Aire de Colmena, apiterapia o información sobre el programa de control de peso." />
        <meta name="keywords" content="contacto Beecura Tordesillas, reservar consulta terapia natural, cita apiterapia Valladolid" />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-honey-50 to-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-honey-100 text-honey-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-honey-200">
              📞 Estamos aquí para ayudarte
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
              Contacta con{' '}
              <span className="text-gradient">Beecura Tordesillas</span>
            </h1>
            <p className="text-xl text-gray-600">
              Reserva tu consulta, pide información o simplemente cuéntanos qué necesitas.
              Te responderemos a la mayor brevedad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* FORMULARIO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                eyebrow="Formulario de contacto"
                title="Escríbenos"
                subtitle="Completa el formulario y nos pondremos en contacto contigo."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </motion.div>

            {/* DATOS + MAPA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div>
                <SectionTitle
                  eyebrow="Contacto directo"
                  title="Otras formas de contactar"
                />
                <div className="mt-6 space-y-4">
                  {contactData.map(({ icon: Icon, label, value, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-warm-100 shadow-sm hover:shadow-md hover:border-honey-200 transition-all"
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">{label}</p>
                        <p className="text-sm font-semibold text-gray-800">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp destacado */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">WhatsApp directo</p>
                    <p className="text-sm text-gray-500">Respuesta rápida</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  La forma más rápida de contactar. Escríbenos en cualquier momento y te responderemos a la brevedad.
                </p>
                <a
                  href="https://wa.me/525564452737?text=Hola,%20me%20gustaría%20reservar%20una%20consulta%20en%20Beecura%20Tordesillas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  💬 Escribir por WhatsApp
                </a>
              </div>

              {/* Mapa placeholder */}
              <div className="bg-warm-50 rounded-3xl border border-warm-200 overflow-hidden">
                <div className="p-6 pb-0">
                  <p className="font-bold text-gray-800 mb-1">Tordesillas, Valladolid</p>
                  <p className="text-sm text-gray-500">España</p>
                </div>
                <div className="h-48 bg-gradient-to-br from-honey-100 to-warm-100 flex items-center justify-center m-4 rounded-2xl border border-honey-200">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📍</div>
                    <p className="text-sm text-gray-500 font-medium">Tordesillas, Valladolid</p>
                    <a
                      href="https://maps.google.com/?q=Tordesillas,+Valladolid,+Spain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-honey-600 hover:underline mt-1 block"
                    >
                      Abrir en Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
