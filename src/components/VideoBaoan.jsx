import SectionTitle from './SectionTitle'
import LocalVideo from './LocalVideo'
import { videoBaoan } from '../data/siteConfig'

export default function VideoBaoan({ centered = true }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow={videoBaoan.eyebrow}
          title={videoBaoan.title}
          subtitle={videoBaoan.subtitle}
          centered={centered}
        />
        <div className="mt-10">
          <LocalVideo
            src={videoBaoan.src}
            title={videoBaoan.videoTitle}
            caption={videoBaoan.caption}
          />
        </div>
      </div>
    </section>
  )
}
