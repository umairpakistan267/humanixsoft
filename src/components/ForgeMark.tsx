import { useId } from 'react'

type Props = {
  className?: string
}

export function ForgeMark({ className = 'h-9 w-9' }: Props) {
  const id = useId().replace(/:/g, '')
  const glow = `hx-glow-${id}`
  const ugrad = `hx-u-${id}`
  const ring = `hx-ring-${id}`

  return (
    <svg viewBox="0 0 200 200" className={`rounded-[12px] ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id={glow} cx="50%" cy="48%" r="48%">
          <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.42" />
          <stop offset="42%" stopColor="#c41e3a" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#08080a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={ugrad} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f7f4f2" />
          <stop offset="38%" stopColor="#ff8a9a" />
          <stop offset="100%" stopColor="#ff3d5a" />
        </linearGradient>
        <linearGradient id={ring} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <rect width="200" height="200" fill="#08080a" />
      <circle cx="100" cy="96" r="78" fill={`url(#${glow})`} />

      <g fill="none" stroke={`url(#${ring})`}>
        <circle cx="100" cy="96" r="88" strokeWidth="0.7" opacity="0.55" />
        <circle cx="100" cy="96" r="74" strokeWidth="0.6" strokeDasharray="3 5" opacity="0.7" />
        <circle cx="100" cy="96" r="60" strokeWidth="0.7" opacity="0.4" />
        <circle cx="100" cy="96" r="46" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5" />
      </g>

      <circle cx="174" cy="58" r="1.7" fill="#ff5a72" />
      <circle cx="168" cy="128" r="1.2" fill="#fff" opacity="0.85" />
      <circle cx="32" cy="72" r="1.3" fill="#ff5a72" />
      <circle cx="40" cy="140" r="1.1" fill="#fff" opacity="0.7" />
      <circle cx="148" cy="36" r="1.15" fill="#fff" opacity="0.8" />
      <circle cx="58" cy="38" r="1.05" fill="#ff8a9a" />

      <g fill="none" stroke="#f4f1ee" strokeWidth="12.5" strokeLinecap="square">
        <path d="M53 78v50" />
        <path d="M85 78v50" />
        <path d="M53 103h32" />
      </g>
      <path
        d="M107 78v32a20 20 0 0 0 40 0V78"
        fill="none"
        stroke={`url(#${ugrad})`}
        strokeWidth="12.5"
        strokeLinecap="square"
      />

      <g fill="none" stroke="#ff4d6d" strokeWidth="1.15">
        <circle cx="100" cy="70.5" r="5.2" />
      </g>
      <circle cx="100" cy="70.5" r="1.85" fill="#ff3d5a" />

      <text
        x="100"
        y="154"
        textAnchor="middle"
        fill="#f4f1ee"
        fontFamily="Outfit, ui-sans-serif, system-ui, sans-serif"
        fontSize="8.2"
        fontWeight="500"
        letterSpacing="3.4"
      >
        EST. 2019
      </text>
    </svg>
  )
}
