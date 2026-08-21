import { useId } from 'react'

type Props = {
  className?: string
}

export function ForgeMark({ className = 'h-9 w-9' }: Props) {
  const clip = `hx-mark-top-${useId().replace(/:/g, '')}`

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <rect x="12" y="0" width="26.8" height="36.6" />
        </clipPath>
      </defs>
      <rect width="64" height="64" rx="16" fill="var(--color-ink-2)" />
      <g fill="none" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <g stroke="var(--color-ember)">
          <path d="M20 19.2v26.6" />
          <path d="M20 32.5h14.6" />
          <path d="M34.6 19.2v23.2a8.6 8.6 0 0 0 17.2 0V24.6" />
        </g>
        <g stroke="var(--color-paper)" clipPath={`url(#${clip})`}>
          <path d="M20 19.2v26.6" />
          <path d="M20 32.5h14.6" />
          <path d="M34.6 19.2v23.2" />
        </g>
      </g>
      <circle cx="51.8" cy="16.4" r="3.55" fill="var(--color-ember-2)" />
    </svg>
  )
}
