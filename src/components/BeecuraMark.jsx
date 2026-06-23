/** Marca Beecura® — símbolo de registro en todos los usos visibles */
export default function BeecuraMark({ className = '', children, as: Tag = 'span', nowrap = false }) {
  return (
    <Tag className={`inline-flex items-baseline ${nowrap ? 'whitespace-nowrap' : ''} ${className}`}>
      <span>Beecura</span>
      <sup
        className="inline-flex items-center justify-center ml-0.5 w-[0.58em] h-[0.58em] min-w-[0.58em] rounded-full border-[1.5px] border-current text-[0.36em] font-bold leading-none translate-y-[-0.12em] select-none"
        aria-label="marca registrada"
      >
        ®
      </sup>
      {children}
    </Tag>
  )
}
