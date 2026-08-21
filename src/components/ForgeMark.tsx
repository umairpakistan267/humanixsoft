type Props = {
  className?: string
}

export function ForgeMark({ className = 'h-9 w-9' }: Props) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="var(--color-ink-2)" />
      <path
        d="M11 29V11h4.2v6.4h5.2V11H24.6v18H20.4v-7.4h-5.2V29H11Z"
        fill="var(--color-paper)"
      />
      <path
        d="M28.2 11v12.2c0 3.5 2.1 5.6 5.6 5.6s5.6-2.1 5.6-5.6V11H35.2v11.9c0 1.5-.8 2.4-1.4 2.4s-1.4-.9-1.4-2.4V11h-4.2Z"
        fill="var(--color-ember)"
      />
      <circle cx="33.4" cy="11.2" r="2.2" fill="var(--color-ember-2)" />
    </svg>
  )
}
