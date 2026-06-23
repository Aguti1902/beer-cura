/** Contenedor centrado para vídeos, mapas e iframes */
export default function CenteredMedia({ children, wide = false, className = '' }) {
  return (
    <div className={`mx-auto w-full ${wide ? 'max-w-5xl' : 'max-w-4xl'} ${className}`}>
      {children}
    </div>
  )
}
