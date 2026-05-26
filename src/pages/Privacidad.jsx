import { Helmet } from 'react-helmet-async'

export default function Privacidad() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad · Beecura Tordesillas</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="py-24 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-warm-200 shadow-sm p-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Política de Privacidad</h1>
            <div className="h-1 w-16 bg-gradient-to-r from-honey-500 to-amber-400 rounded-full mb-8" />

            <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">1. Responsable del tratamiento</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Responsable:</strong> Ramón Regalado Rico (Beecura Tordesillas)</li>
                  <li><strong>Denominación:</strong> Beecura Tordesillas</li>
                  <li><strong>Email:</strong> bermato2004@yahoo.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">2. Datos que recopilamos</h2>
                <p>A través del formulario de contacto de este sitio web podemos recopilar los siguientes datos personales:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Servicio de interés (opcional)</li>
                  <li>Contenido del mensaje</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">3. Finalidad del tratamiento</h2>
                <p>Los datos personales facilitados se utilizan exclusivamente para:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Responder a las consultas y solicitudes enviadas a través del formulario de contacto.</li>
                  <li>Gestionar la reserva de citas y consultas.</li>
                  <li>Enviar información sobre servicios, siempre que el usuario haya prestado su consentimiento.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">4. Base legal</h2>
                <p>
                  El tratamiento de los datos se realiza en base al consentimiento del usuario, quien acepta libremente el envío del formulario de contacto.
                  En el caso de servicios contratados, la base legal es la ejecución de un contrato.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">5. Conservación de los datos</h2>
                <p>
                  Los datos personales se conservarán el tiempo mínimo necesario para la prestación del servicio o hasta que el usuario solicite su supresión,
                  respetando en todo caso los plazos legales obligatorios.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">6. Derechos del usuario</h2>
                <p>En cualquier momento, puede ejercer los siguientes derechos:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li><strong>Acceso:</strong> conocer qué datos personales tratamos sobre usted.</li>
                  <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                  <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
                  <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
                  <li><strong>Portabilidad:</strong> recibir sus datos en formato electrónico.</li>
                </ul>
                <p className="mt-3">
                  Para ejercer estos derechos, puede enviar una solicitud a: <strong>bermato2004@yahoo.com</strong>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">7. Cesión de datos</h2>
                <p>
                  No se cederán datos personales a terceros salvo obligación legal o autorización expresa del interesado.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">8. Seguridad</h2>
                <p>
                  Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">9. Autoridad de control</h2>
                <p>
                  Si considera que sus derechos no han sido atendidos correctamente, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): <a href="https://www.aepd.es" className="text-honey-600 underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a>
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
