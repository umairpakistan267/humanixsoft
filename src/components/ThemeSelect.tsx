import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { themes, type ThemeId } from '../theme'
import { ease } from '../motion'
import { useTheme } from './ThemeProvider'

function Swatches({ colors }: { colors: readonly string[] }) {
  return (
    <span className="flex shrink-0 gap-1" aria-hidden>
      {colors.map((color) => (
        <span key={color} className="h-2.5 w-2.5 rounded-full border border-black/20" style={{ background: color }} />
      ))}
    </span>
  )
}

export function ThemeSelect({ className = '', inline = false }: { className?: string; inline?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const current = themes.find((item) => item.id === theme) ?? themes[2]
  const dark = themes.filter((item) => item.group === 'dark')
  const light = themes.filter((item) => item.group === 'light')

  useEffect(() => {
    if (!open) return
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function pick(id: ThemeId) {
    setTheme(id)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        data-cursor
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Color theme"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex w-full items-center justify-between gap-3 rounded-full border border-line bg-ink-2 px-3 py-2 text-left transition hover:border-copper"
      >
        <span className="flex items-center gap-2.5">
          <Swatches colors={current.swatches} />
          <span className="text-[11px] font-medium tracking-[0.14em] text-paper uppercase">{current.label}</span>
        </span>
        <span className="text-[10px] text-muted">{open ? '▴' : '▾'}</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            role="listbox"
            aria-label="Color themes"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className={`nav-blur z-50 overflow-auto rounded-2xl border border-line p-2 shadow-[0_24px_60px_rgba(0,0,0,0.35)] ${
              inline
                ? 'relative mt-2 max-h-[50vh] w-full'
                : 'absolute top-[calc(100%+10px)] right-0 max-h-[70vh] w-[min(320px,calc(100vw-2rem))]'
            }`}
          >
            <p className="px-3 pt-2 pb-1 text-[10px] tracking-[0.2em] text-copper uppercase">Dark</p>
            {dark.map((item) => (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={item.id === theme}
                onClick={() => pick(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                  item.id === theme ? 'bg-ember/15 text-paper' : 'text-paper/90 hover:bg-ink-3'
                }`}
              >
                <Swatches colors={item.swatches} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-medium">{item.label}</span>
                  <span className="block text-[11px] text-muted">{item.hint}</span>
                </span>
              </button>
            ))}
            <p className="px-3 pt-3 pb-1 text-[10px] tracking-[0.2em] text-copper uppercase">Light</p>
            {light.map((item) => (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={item.id === theme}
                onClick={() => pick(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                  item.id === theme ? 'bg-ember/15 text-paper' : 'text-paper/90 hover:bg-ink-3'
                }`}
              >
                <Swatches colors={item.swatches} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-medium">{item.label}</span>
                  <span className="block text-[11px] text-muted">{item.hint}</span>
                </span>
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
