import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const services = [
  'Terapia Aire de Colmena',
  'Apiterapia / Apipuntura',
  'Control de Peso y Péptidos Bioactivos',
  'Enfermería a Domicilio',
  'Taller Escuela / Formación',
  'Otro / Consulta general',
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Aquí conectar con tu API / EmailJS / Formspree
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <CheckCircle size={56} className="text-green-500" />
        <h3 className="text-2xl font-bold text-gray-800">¡Mensaje enviado!</h3>
        <p className="text-gray-500 max-w-sm">
          Gracias por contactar con nosotros. Nos pondremos en contacto contigo a la mayor brevedad posible.
        </p>
        <button onClick={() => setSent(false)} className="btn-secondary mt-2 text-sm">
          Enviar otro mensaje
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre completo *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="w-full border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-honey-400 bg-white transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Teléfono</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+34 600 000 000"
            className="w-full border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-honey-400 bg-white transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="tucorreo@ejemplo.com"
          className="w-full border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-honey-400 bg-white transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Servicio de interés</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-honey-400 bg-white transition"
        >
          <option value="">Selecciona un servicio…</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensaje *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Cuéntanos cómo podemos ayudarte…"
          className="w-full border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-honey-400 bg-white transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Enviando…
          </span>
        ) : (
          <>
            <Send size={16} />
            Enviar solicitud
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Al enviar aceptas nuestra{' '}
        <a href="/privacidad" className="underline hover:text-honey-600">Política de Privacidad</a>.
      </p>
    </form>
  )
}
