import { Helmet } from 'react-helmet-async'
import { contact } from '../data/siteConfig'

export default function AvisoLegal() {
  return (
    <>
      <Helmet>
        <title>Aviso Legal · Beecura Tordesillas</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="py-24 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-warm-200 shadow-sm p-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Aviso Legal</h1>
            <div className="h-1 w-16 bg-gradient-to-r from-honey-500 to-amber-400 rounded-full mb-8" />

            <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">1. Datos del titular</h2>
                <p>
                  En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se facilitan los siguientes datos:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3">
                  <li><strong>Titular:</strong> Ramón Regalado Rico (Beecura Tordesillas)</li>
                  <li><strong>Denominación:</strong> Beecura Tordesillas</li>
                  <li><strong>Localización:</strong> Tordesillas, Valladolid, España</li>
                  <li><strong>Correo electrónico:</strong> {contact.email}</li>
                  <li><strong>Teléfono / WhatsApp:</strong> {contact.phone}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">2. Objeto y ámbito de aplicación</h2>
                <p>
                  El presente Aviso Legal regula el uso y utilización del sitio web, del que es titular Beecura Tordesillas.
                  La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">3. Propiedad intelectual e industrial</h2>
                <p>
                  El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento,
                  los diseños, logotipos, texto y/o gráficos son propiedad del titular o en su caso dispone de licencia o autorización expresa por parte de los autores.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">4. Exclusión de garantías y responsabilidad</h2>
                <p>
                  El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar,
                  a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos,
                  a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">5. Información sobre terapias y salud</h2>
                <div className="bg-honey-50 border border-honey-200 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-2">Aviso importante</p>
                  <p>
                    La información contenida en este sitio web tiene carácter meramente orientativo e informativo.
                    <strong> Las terapias, tratamientos y servicios descritos no constituyen diagnóstico médico ni tratamiento de enfermedades,
                    y no sustituyen en ningún caso el diagnóstico, tratamiento, prescripción o seguimiento de un profesional sanitario cualificado.</strong>
                  </p>
                  <p className="mt-2">
                    Los resultados de las terapias son individuales y pueden variar de una persona a otra.
                    El titular recomienda consultar siempre con un médico o profesional sanitario antes de iniciar cualquier terapia complementaria o alternativa.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">6. Modificaciones</h2>
                <p>
                  El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web,
                  pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">7. Legislación aplicable</h2>
                <p>
                  La relación entre el titular y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y Tribunales de Valladolid.
                </p>
              </section>

              <p className="text-xs text-gray-400 pt-4 border-t border-warm-100">
                Última actualización: Mayo 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
