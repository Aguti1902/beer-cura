import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle } from 'lucide-react'
import PageCta from '../components/PageCta'
import SectionTitle from '../components/SectionTitle'
import ApiterapeutaProfile from '../components/ApiterapeutaProfile'
import GaleriaApiterapia from '../components/GaleriaApiterapia'
import VideoBaoan from '../components/VideoBaoan'
import FAQ from '../components/FAQ'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { faqsApiterapia } from '../data/faqs'
import VideoSonodinamica from '../components/VideoSonodinamica'
import BeecuraMark from '../components/BeecuraMark'
import { apiterapeuta, alessioMunzi, whatsappUrl } from '../data/siteConfig'

const products = [
  {
    emoji: '🍯',
    name: 'Miel terapéutica',
    desc: 'La miel es uno de los productos más completos de la colmena. Rica en enzimas, antioxidantes y compuestos naturales, puede apoyar el bienestar digestivo y general.',
  },
  {
    emoji: '🟤',
    name: 'Propóleo',
    desc: 'Resina natural recolectada por las abejas con una composición rica en flavonoides y compuestos bioactivos. Puede contribuir a apoyar las defensas naturales del organismo.',
  },
  {
    emoji: '👑',
    name: 'Jalea Real',
    desc: 'Sustancia exclusiva producida por las abejas obreras. Rica en aminoácidos, vitaminas del grupo B y ácidos grasos únicos. Muy valorada en bienestar energético y vitalidad.',
  },
  {
    emoji: '🌼',
    name: 'Polen',
    desc: 'El polen de abeja es una fuente concentrada de proteínas, vitaminas y minerales. Puede favorecer el aporte nutricional complementario.',
  },
  {
    emoji: '💧',
    name: 'Veneno de abeja (Apitoxina)',
    desc: `La apitoxina contiene péptidos y enzimas de interés científico. En Tordesillas, ${apiterapeuta.name}; en Valladolid capital y provincia, ${alessioMunzi.name} (${alessioMunzi.role.toLowerCase()}) realiza las sesiones y atenciones a domicilio.`,
  },
  {
    emoji: '🕯️',
    name: 'Cera de abeja',
    desc: 'Utilizada en preparados y aplicaciones externas. La cera de abeja posee propiedades naturales interesantes para la piel y el bienestar externo.',
  },
]

export default function Apiterapia() {
  return (
    <>
      <Helmet>
        <title>Apiterapia y Apipuntura · Productos de la Colmena · Tordesillas</title>
        <meta name="description" content={`Apiterapia y apipuntura en Tordesillas con ${apiterapeuta.name}, apiterapeuta. Miel, propóleo, jalea real y protocolo individualizado.`} />
        <meta name="keywords" content="apiterapia, apipuntura, veneno de abeja, propóleo, jalea real, miel terapéutica, terapia natural Valladolid, apitoxina" />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50 to-honey-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-amber-200">
              🐝 Apiterapia y Apipuntura
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              El poder terapéutico de{' '}
              <span className="text-gradient">la colmena</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Uso de las abejas y los productos de la colmena para favorecer el bienestar, las defensas naturales
              y el buen estado de forma. Siempre bajo valoración y acompañamiento profesional.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contacto" className="btn-primary text-base px-8 py-4">
                Solicitar valoración
              </Link>
              <a
                href={whatsappUrl('Hola, quiero información sobre apiterapia')}
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

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionTitle
              eyebrow="Qué es la apiterapia"
              title="La medicina de la abeja"
              subtitle="La apiterapia engloba el conjunto de prácticas terapéuticas basadas en el uso de los productos de la colmena. Una tradición milenaria respaldada por el interés científico contemporáneo."
              centered
            />
          </div>
          <div className="bg-honey-50 rounded-3xl p-8 border border-honey-200">
            <p className="text-gray-700 leading-relaxed text-center text-lg">
              La apiterapia y la apipuntura en <BeecuraMark className="font-semibold" /> Tordesillas las imparte{' '}
              <strong>{apiterapeuta.name}</strong>, {apiterapeuta.role.toLowerCase()}, con más de siete años de formación
              continua con docentes de referencia en España y China.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Productos de la colmena"
            title="Los seis tesoros de la abeja"
            subtitle="Cada producto de la colmena tiene una composición única y un potencial terapéutico propio."
            centered
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card"
              >
                <div className="text-4xl mb-4">{product.emoji}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{product.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <LegalDisclaimer className="max-w-2xl" />
          </div>
        </div>
      </section>

      {/* APIPUNTURA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                eyebrow="Técnica avanzada"
                title="Apipuntura"
                subtitle="Aplicación controlada del veneno de abeja en puntos específicos del cuerpo, similar a la acupuntura."
              />
              <p className="mt-6 text-gray-600 leading-relaxed mb-6">
                La apipuntura es una técnica especializada dentro de la apiterapia que consiste en la aplicación
                controlada y dosificada de <strong className="text-gray-800">apitoxina (veneno de abeja)</strong> en puntos específicos del cuerpo,
                con un enfoque similar al de la acupuntura tradicional china.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Requiere una valoración previa exhaustiva. En Tordesillas, bajo la supervisión de{' '}
                <strong className="text-gray-800">{apiterapeuta.name}</strong>. En Valladolid capital y provincia,
                las sesiones de apipuntura y apiterapia con veneno de abeja las realiza{' '}
                <strong className="text-gray-800">{alessioMunzi.name}</strong>, {alessioMunzi.role.toLowerCase()},
                con atención a domicilio.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
                <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 text-sm mb-1">Aviso de seguridad importante</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    La apipuntura y el uso de apitoxina <strong>no se realizan en personas con alergia conocida al veneno de abeja</strong>,
                    ni sin valoración profesional previa obligatoria. Es imprescindible informar sobre cualquier alergia conocida.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-honey-100 to-amber-50 rounded-3xl p-8 text-center border border-honey-200">
                <div className="text-6xl mb-4">💉</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Apipuntura</h3>
                <p className="text-sm text-gray-600">Protocolo controlado · Valoración previa · Supervisión continua</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { check: 'Valoración previa obligatoria' },
                  { check: 'Protocolo individualizado' },
                  { check: 'Dosis controlada' },
                  { check: 'Supervisión médica' },
                ].map(({ check }) => (
                  <div key={check} className="flex items-start gap-2 bg-white rounded-xl p-3 border border-warm-100 shadow-sm">
                    <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 font-medium">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AlessioMunzi />

      <VideoSonodinamica />

      <ApiterapeutaProfile />

      <GaleriaApiterapia />

      <VideoBaoan />

      {/* FAQ */}
      <FAQ faqs={faqsApiterapia} title="Preguntas sobre Apiterapia" />

      <PageCta
        title="¿Quieres saber si la apiterapia es para ti?"
        description={`Solicita una valoración personalizada con ${apiterapeuta.name}. Sin compromiso.`}
        primaryLabel="Solicitar valoración"
        whatsappMessage="Hola, quiero información sobre apiterapia"
      />
    </>
  )
}
