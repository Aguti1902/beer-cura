import SectionTitle from './SectionTitle'
import VideoEmbed from './VideoEmbed'
import { videoSonodinamica } from '../data/siteConfig'

export default function VideoSonodinamica() {
  return (
    <section className="py-20 bg-gray-900 bg-honeycomb">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow={videoSonodinamica.eyebrow}
          title={videoSonodinamica.title}
          subtitle={videoSonodinamica.subtitle}
          centered
          light
        />
        <div className="mt-12">
          <VideoEmbed
            vimeoId={videoSonodinamica.vimeoId}
            title={videoSonodinamica.title}
            facade
            facadeLabel="Reproducir vídeo"
          />
        </div>
      </div>
    </section>
  )
}
