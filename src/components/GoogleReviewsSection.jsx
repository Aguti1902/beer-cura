import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ExternalLink, MapPin } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { google } from '../data/siteConfig'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-honey-400 text-honey-400" />
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
      className="card flex flex-col gap-3"
    >
      <div className="flex items-center justify-between gap-2">
        <Stars count={review.rating || 5} />
        <span className="text-xs text-gray-400 flex-shrink-0">{review.relativeTime || review.date}</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed italic flex-1">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center justify-between pt-3 border-t border-warm-100">
        <p className="text-sm font-semibold text-gray-800">{review.author}</p>
        <span className="text-xs text-honey-600 font-medium flex items-center gap-1">
          <MapPin size={12} />
          Google
        </span>
      </div>
    </motion.article>
  )
}

export default function GoogleReviewsSection({ showTitle = true, showMap = true }) {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(false)
  const [rating, setRating] = useState(null)
  const [total, setTotal] = useState(null)
  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY
  const placeId = google.placeId || import.meta.env.VITE_GOOGLE_PLACE_ID

  useEffect(() => {
    if (!apiKey || !placeId) return

    const fetchReviews = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://places.googleapis.com/v1/places/${placeId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': apiKey,
              'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
            },
          }
        )
        if (!res.ok) throw new Error('Places API error')
        const data = await res.json()
        setRating(data.rating)
        setTotal(data.userRatingCount)
        setReviews(
          (data.reviews || []).slice(0, 9).map((r) => ({
            author: r.authorAttribution?.displayName || 'Usuario de Google',
            text: r.text?.text || '',
            rating: r.rating,
            relativeTime: r.relativePublishTimeDescription,
          }))
        )
      } catch {
        setReviews([])
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [apiKey, placeId])

  return (
    <div>
      {showTitle && (
        <SectionTitle
          eyebrow="Google Maps"
          title="Reseñas de nuestros usuarios"
          subtitle="Opiniones reales publicadas en Google Maps. También puedes dejar la tuya."
          centered
        />
      )}

      <div className="mt-10 flex flex-col items-center gap-4">
        {(rating != null || total != null) && (
          <div className="inline-flex flex-col items-center bg-white rounded-3xl shadow-md border border-warm-100 px-10 py-6 gap-2">
            <p className="text-5xl font-bold text-gray-800">{rating?.toFixed(1)}</p>
            <Stars />
            <p className="text-sm text-gray-500">{total} reseñas en Google</p>
          </div>
        )}

        <a
          href={google.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-primary"
        >
          <ExternalLink size={16} />
          Ver reseñas en Google Maps
        </a>
      </div>

      {showMap && (
        <div className="mt-10 rounded-2xl overflow-hidden border border-warm-200 shadow-lg aspect-[16/9] max-h-[420px]">
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
      )}

      {loading && (
        <p className="text-center text-sm text-gray-500 mt-8">Cargando reseñas de Google…</p>
      )}

      {reviews.length > 0 && (
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      )}

      {reviews.length === 0 && !loading && (
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-sm text-gray-600 leading-relaxed">
            Las reseñas se muestran directamente desde Google Maps. Pulsa el botón superior para leer
            y escribir opiniones verificadas. Si dispones de Place ID y API key de Google Places,
            configura <code className="text-xs bg-warm-100 px-1 rounded">VITE_GOOGLE_PLACE_ID</code> y{' '}
            <code className="text-xs bg-warm-100 px-1 rounded">VITE_GOOGLE_PLACES_API_KEY</code> en el
            proyecto para listarlas aquí automáticamente.
          </p>
        </div>
      )}
    </div>
  )
}
