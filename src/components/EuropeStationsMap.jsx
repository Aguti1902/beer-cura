import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionTitle from './SectionTitle'
import CenteredMedia from './CenteredMedia'
import { beecuraEuropeMap } from '../data/siteConfig'

export default function EuropeStationsMap({ centered = true }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Red internacional"
          title={beecuraEuropeMap.title}
          subtitle={beecuraEuropeMap.description}
          centered={centered}
        />

        <CenteredMedia wide className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-warm-200 shadow-xl"
          >
            <iframe
              title="Mapa de estaciones Beecura en Europa"
              src={beecuraEuropeMap.embedUrl}
              className="w-full aspect-[16/10] min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </CenteredMedia>

        <p className="text-center mt-6">
          <a
            href={beecuraEuropeMap.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-honey-600 hover:text-honey-700"
          >
            Mapa oficial en beecura.com
            <ExternalLink size={14} />
          </a>
        </p>
      </div>
    </section>
  )
}
