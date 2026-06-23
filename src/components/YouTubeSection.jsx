import { motion } from 'framer-motion'
import { ExternalLink, Youtube } from 'lucide-react'
import SectionTitle from './SectionTitle'
import BeecuraMark from './BeecuraMark'
import { youtube } from '../data/siteConfig'

export default function YouTubeSection({ light = false }) {
  return (
    <section className={light ? 'py-20 bg-gray-900 bg-honeycomb' : 'py-20 bg-white'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Vídeos"
          title={<><BeecuraMark className="font-bold" /> en YouTube</>}
          subtitle="Playlist y canal con sesiones, terapias y el día a día de Beecura® Tordesillas."
          centered
          light={light}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl overflow-hidden shadow-2xl border border-warm-200 aspect-video max-h-[500px]"
        >
          <iframe
            title="Playlist Beecura Tordesillas"
            src={`https://www.youtube.com/embed/videoseries?list=${youtube.playlistId}`}
            className="w-full h-full min-h-[280px]"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={youtube.playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Youtube size={18} />
            Ver playlist completa
            <ExternalLink size={14} />
          </a>
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Canal {youtube.channelLabel}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
