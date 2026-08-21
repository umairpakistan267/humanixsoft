import { motion, useSpring } from 'framer-motion'
import { useRef, useState, type PointerEvent, type ReactNode } from 'react'
import { useFinePointer, usePrefersReducedMotion } from '../motion'

type Props = {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const [hover, setHover] = useState(false)
  const [shine, setShine] = useState({ x: 50, y: 50 })
  const rx = useSpring(0, { stiffness: 160, damping: 16 })
  const ry = useSpring(0, { stiffness: 160, damping: 16 })

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (!fine || reduced || event.pointerType !== 'mouse') return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    ry.set((x - 0.5) * 14)
    rx.set((0.5 - y) * 10)
    setShine({ x: x * 100, y: y * 100 })
  }

  function onLeave() {
    rx.set(0)
    ry.set(0)
    setHover(false)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 920 }}
      onPointerMove={onMove}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={onLeave}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(420px circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.28), transparent 42%)`,
        }}
      />
    </motion.div>
  )
}
