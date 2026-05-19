import { Info } from 'lucide-react'

export default function LegalDisclaimer({ className = '' }) {
  return (
    <div className={`flex items-start gap-3 bg-honey-50 border border-honey-200 rounded-xl p-4 ${className}`}>
      <Info size={16} className="text-honey-600 flex-shrink-0 mt-0.5" />
      <p className="text-xs text-gray-500 leading-relaxed italic">
        <strong className="text-gray-600 not-italic">Información orientativa.</strong> Las terapias descritas no sustituyen el diagnóstico, tratamiento ni seguimiento médico convencional.
        Consulta siempre con un profesional sanitario antes de iniciar cualquier terapia. Los resultados pueden variar de una persona a otra.
      </p>
    </div>
  )
}
