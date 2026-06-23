import { motion } from 'framer-motion'
import { ExternalLink, Youtube } from 'lucide-react'
import SectionTitle from './SectionTitle'
import BeecuraMark from './BeecuraMark'
import CenteredMedia from './CenteredMedia'
import { youtube } from '../data/siteConfig'

export default function YouTubeSection({ light = false }) {
  return (
    <section className={light ? 'py-20 bg-gray-900 bg-honeycomb' : 'py-20 bg-white'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Vídeos"
          title={
            <span className="inline-flex items-baseline justify-center gap-1 flex-wrap">
              <BeecuraMark className="font-bold" nowrap /> en YouTube
            </span>
          }
          subtitle="Playlist y canal con sesiones, terapias y el día a día de Beecura® Tordesillas."
          centered
          light={light}
        />

        <CenteredMedia className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-warm-200"
          >
            <iframe
              title="Playlist Beecura Tordesillas"
              src={`https://www.youtube.com/embed/videoseries?list=${youtube.playlistId}`}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </CenteredMedia>

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
            className={`inline-flex items-center gap-2 ${light ? 'btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20' : 'btn-secondary'}`}
          >
            Canal {youtube.channelLabel}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
