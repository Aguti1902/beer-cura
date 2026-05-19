import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

export default function LocationCard({ center }) {
  return (
    <div className={`card ${center.featured ? 'border-honey-300 shadow-md' : ''}`}>
      {center.featured && (
        <div className="inline-flex items-center gap-1 bg-honey-100 text-honey-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          ⭐ Centro principal
        </div>
      )}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <MapPin size={18} className="text-honey-700" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{center.name}</h3>
          <p className="text-sm text-gray-500">{center.location}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{center.description}</p>
      {center.phone && (
        <div className="space-y-1 mb-3">
          {center.phone.map(p => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-honey-700 hover:text-honey-800">
              <Phone size={13} />
              {p}
            </a>
          ))}
        </div>
      )}
      {center.email && (
        <a href={`mailto:${center.email}`} className="flex items-center gap-2 text-sm text-honey-700 hover:text-honey-800 mb-4">
          <Mail size={13} />
          {center.email}
        </a>
      )}
      {center.featured && (
        <a
          href="/contacto"
          className="btn-primary text-sm py-2.5 w-full justify-center"
        >
          Reservar consulta
        </a>
      )}
    </div>
  )
}
