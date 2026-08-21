import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Magnetic } from './Magnetic'

type Props = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'ember' | 'ghost' | 'paper' | 'ink'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const variants = {
  ember:
    'bg-ember text-ink btn-ember-glow hover:bg-ember-2 hover:text-ink',
  ghost: 'border border-line-strong text-paper hover:border-copper hover:text-copper',
  paper: 'bg-paper text-ink hover:bg-white',
  ink: 'bg-ink text-paper hover:bg-ink-3',
}

export function Button({
  children,
  to,
  href,
  variant = 'ember',
  className = '',
  type = 'button',
  onClick,
}: Props) {
  const cls = `btn-shine inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[13px] font-medium tracking-[0.04em] transition duration-300 ${variants[variant]} ${className}`
  const wide = className.includes('w-full')

  const inner = (
    <>
      <span>{children}</span>
      <span className="btn-arrow" aria-hidden>
        →
      </span>
    </>
  )

  if (to) {
    return (
      <Magnetic className={wide ? 'w-full' : ''}>
        <Link to={to} className={`${cls} ${wide ? 'w-full' : ''}`} data-cursor>
          {inner}
        </Link>
      </Magnetic>
    )
  }

  if (href) {
    return (
      <Magnetic className={wide ? 'w-full' : ''}>
        <a href={href} className={cls} data-cursor>
          {inner}
        </a>
      </Magnetic>
    )
  }

  return (
    <Magnetic className={wide ? 'w-full' : ''}>
      <button type={type} onClick={onClick} className={`${cls} ${wide ? 'w-full' : ''}`} data-cursor>
        {inner}
      </button>
    </Magnetic>
  )
}
