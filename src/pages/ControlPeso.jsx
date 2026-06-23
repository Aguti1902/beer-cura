import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, TrendingUp, Brain, Moon, Zap } from 'lucide-react'
import PageCta from '../components/PageCta'
import SectionTitle from '../components/SectionTitle'
import DrAcostaProgramDirector from '../components/DrAcostaProgramDirector'
import FAQ from '../components/FAQ'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { faqsControlPeso } from '../data/faqs'
import { drAcosta, whatsappUrl } from '../data/siteConfig'

const cortisolEffects = [
  { icon: Brain, label: 'Niebla mental y dificultad de concentración' },
  { icon: Zap, label: 'Fatiga crónica y sensación de agotamiento' },
  { icon: TrendingUp, label: 'Aumento de peso, especialmente abdominal' },
  { icon: Moon, label: 'Mala calidad del sueño y descanso insuficiente' },
  { icon: Brain, label: 'Ansiedad por comer y antojos frecuentes' },
  { icon: Zap, label: 'Inflamación de bajo grado persistente' },
]

const peptidesBenefits = [
  'Puede favorecer un ritmo saludable del cortisol',
  'Puede apoyar el equilibrio de neurotransmisores',
  'Puede contribuir a mejorar la calidad del sueño y la recuperación',
  'Puede ayudar a reducir señales inflamatorias',
  'Puede apoyar niveles más estables de energía',
  'Puede favorecer la regulación del azúcar en sangre',
]

const glpData = [
  {
    name: 'GLP-1',
    emoji: '🎯',
    color: 'bg-honey-50 border-honey-200',
    accent: 'text-honey-700',
    title: 'Regulación del hambre',
    desc: 'GLP-1 (péptido similar al glucagón tipo 1) actúa en los centros del apetito del cerebro. Puede favorecer la saciedad, el control de antojos y la reducción del hambre emocional.',
    points: ['Apoyo a la saciedad', 'Control de antojos', 'Regulación del apetito'],
  },
  {
    name: 'GLP-2',
    emoji: '🌱',
    color: 'bg-olive-50 border-olive-200',
    accent: 'text-olive-700',
    title: 'Barrera intestinal',
    desc: 'GLP-2 desempeña un papel importante en la integridad de la mucosa intestinal. Puede contribuir a una microbiota más equilibrada y a una mejor absorción de nutrientes.',
    points: ['Protección intestinal', 'Microbiota saludable', 'Absorción de nutrientes'],
  },
  {
    name: 'GIP',
    emoji: '⚡',
    color: 'bg-amber-50 border-amber-200',
    accent: 'text-amber-700',
    title: 'Sensibilidad a la insulina',
    desc: 'GIP (polipéptido inhibidor gástrico) está implicado en la respuesta insulínica. Puede apoyar la sensibilidad a la insulina, la regulación de la glucosa y la energía sostenible.',
    points: ['Sensibilidad insulínica', 'Glucosa estable', 'Energía sostenida'],
  },
]

export default function ControlPeso() {
  return (
    <>
      <Helmet>
        <title>Control de Peso y Péptidos Bioactivos · Programa Beecura Tordesillas</title>
        <meta name="description" content="Programa de pérdida y control de peso con péptidos bioactivos GLP-1, GLP-2 y GIP. Dirección: Dr. Bernardo J. Acosta. Alojado en Beecura Tordesillas." />
        <meta name="keywords" content="control de peso natural, péptidos bioactivos, GLP-1, GLP-2, GIP, cortisol, programa peso Tordesillas" />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-olive-50 to-honey-50 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-olive-100 text-olive-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-olive-200">
              🌿 Control de Peso y Péptidos Bioactivos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              Equilibrio metabólico{' '}
              <span className="text-gradient">desde adentro</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Un abordaje integral basado en la regulación del cortisol, el apoyo con péptidos bioactivos
              y la comprensión del papel del estrés en tu metabolismo.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contacto" className="btn-primary text-base px-8 py-4">
                Solicitar valoración
              </Link>
              <a
                href={whatsappUrl('Hola, quiero información sobre control de peso con péptidos')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                💬 Consultar
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <DrAcostaProgramDirector />

      {/* EL CORTISOL */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                eyebrow="Entendiendo el cortisol"
                title="El cortisol no es tu enemigo"
                subtitle="El cortisol es una hormona esencial para la vida. El problema no es el cortisol en sí, sino el estrés crónico que lo desregula."
              />
              <div className="mt-8 space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  El cortisol es necesario para regulare el ciclo del sueño-vigilia, movilizar energía, gestionar la respuesta inflamatoria y mucho más.
                  <strong className="text-gray-800"> Su presencia es indispensable</strong>.
                </p>
                <p className="leading-relaxed">
                  El problema aparece cuando el <strong className="text-gray-800">estrés crónico</strong> mantiene los niveles de cortisol elevados de forma sostenida.
                  En ese contexto, el organismo puede entrar en un estado de desequilibrio metabólico con consecuencias visibles.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-honey-50 to-amber-50 rounded-3xl p-8 border border-honey-200">
                <h3 className="font-bold text-gray-800 mb-5 text-lg">
                  Posibles efectos del cortisol elevado crónico:
                </h3>
                <div className="space-y-3">
                  {cortisolEffects.map(({ icon: Icon, label }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm"
                    >
                      <div className="w-8 h-8 bg-honey-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-honey-700" />
                      </div>
                      <span className="text-sm text-gray-700">{label}</span>
                    </motion.div>
                  ))}
                </div>
                <LegalDisclaimer className="mt-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PÉPTIDOS BIOACTIVOS */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Péptidos bioactivos"
            title="Cómo pueden apoyar tu proceso"
            subtitle="Las gotas de péptidos bioactivos actúan como señalizadores naturales en el organismo. Pueden apoyar múltiples procesos relacionados con el peso y el metabolismo."
            centered
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {peptidesBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-warm-100 shadow-sm"
              >
                <CheckCircle size={16} className="text-olive-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <LegalDisclaimer className="max-w-2xl" />
          </div>
        </div>
      </section>

      {/* triGLP */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="triGLP"
            title="La sinergia de tres péptidos clave"
            subtitle="triGLP combina tres péptidos que actúan de forma sinérgica para apoyar el metabolismo desde diferentes frentes."
            centered
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {glpData.map((glp, i) => (
              <motion.div
                key={glp.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`rounded-3xl border-2 p-8 ${glp.color}`}
              >
                <div className="text-5xl mb-4">{glp.emoji}</div>
                <div className={`text-sm font-bold uppercase tracking-wider mb-1 ${glp.accent}`}>{glp.name}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{glp.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{glp.desc}</p>
                <ul className="space-y-2">
                  {glp.points.map(point => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={13} className="text-green-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 bg-honey-50 rounded-3xl p-8 border border-honey-200 text-center">
            <h3 className="font-bold text-xl text-gray-800 mb-3">¿Garantizamos pérdida de peso?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              <strong className="text-gray-800">No realizamos promesas de pérdida de peso garantizada.</strong>{' '}
              Los péptidos bioactivos pueden apoyar el proceso, pero los resultados son individuales y dependen
              de múltiples factores como el estado de salud, el estilo de vida y la adherencia al protocolo.
              La valoración inicial es imprescindible.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqsControlPeso} title="Preguntas sobre Péptidos y Control de Peso" />

      <PageCta
        title="Inicia tu transformación metabólica"
        description={`Valoración del programa con ${drAcosta.shortName}. Sin compromiso.`}
        primaryLabel="Solicitar valoración"
        whatsappMessage="Hola, quiero información sobre el programa de control de peso"
      />
    </>
  )
}
