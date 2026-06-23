/** Marca Beecura® — símbolo de registro en todos los usos visibles */
export default function BeecuraMark({ className = '', children, as: Tag = 'span', nowrap = false }) {
  return (
    <Tag className={`inline-flex items-baseline ${nowrap ? 'whitespace-nowrap' : ''} ${className}`}>
      <span>Beecura</span>
      <sup
        className="ml-0.5 text-[0.55em] font-normal leading-none align-super select-none"
        aria-label="marca registrada"
      >
        ®
      </sup>
      {children}
    </Tag>
  )
}
