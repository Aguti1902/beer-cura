import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import SectionTitle from './SectionTitle'
import CenteredMedia from './CenteredMedia'
import GoogleLogo from './GoogleLogo'
import { google, sampleReviews } from '../data/siteConfig'

function Stars({ count = 5, size = 16 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card flex flex-col gap-3 h-full"
    >
      <div className="flex items-center justify-between gap-2">
        <Stars count={review.rating || 5} />
        <span className="text-xs text-gray-400 flex-shrink-0">{review.date}</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center justify-between pt-3 border-t border-warm-100">
        <p className="text-sm font-semibold text-gray-800">{review.author}</p>
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium">
          <GoogleLogo className="h-3.5 w-3.5" />
          Google
        </span>
      </div>
    </motion.article>
  )
}

export default function GoogleReviewsSection({ showTitle = true, showMap = true }) {
  const { rating, total, items } = sampleReviews

  return (
    <div>
      {showTitle && (
        <SectionTitle
          eyebrow="Google Maps"
          title="Reseñas de nuestros usuarios"
          subtitle="Opiniones de personas que han probado Beecura de Aire de Colmena en Tordesillas."
          centered
        />
      )}

      <div className="mt-10 flex flex-col items-center gap-6">
        <div className="inline-flex flex-col items-center bg-white rounded-3xl shadow-md border border-warm-100 px-10 py-6 gap-2">
          <div className="flex items-center gap-2">
            <GoogleLogo className="h-6 w-6" />
            <p className="text-5xl font-bold text-gray-800">{rating.toFixed(1)}</p>
          </div>
          <Stars size={18} />
          <p className="text-sm text-gray-500">{total} reseñas en Google Maps</p>
        </div>

        <a
          href={google.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-primary"
        >
          <ExternalLink size={16} />
          Ver todas en Google Maps
        </a>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((review) => (
          <ReviewCard key={review.author} review={review} />
        ))}
      </div>

      {showMap && (
        <CenteredMedia className="mt-12">
          <div className="rounded-2xl overflow-hidden border border-warm-200 shadow-lg aspect-[16/9] min-h-[320px]">
            <iframe
              title="Ubicación Beecura Tordesillas en Google Maps"
              src={google.mapEmbedUrl}
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </CenteredMedia>
      )}
    </div>
  )
}
