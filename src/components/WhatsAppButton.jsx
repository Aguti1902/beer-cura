import { whatsappUrl } from '../data/siteConfig'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl('Hola, me gustaría información sobre las terapias Beecura')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="Contactar por WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </a>
  )
}
