import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type PointerEvent, type ReactNode } from 'react'
import { useFinePointer, usePrefersReducedMotion } from '../motion'

type Props = {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className = '', strength = 0.32 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 280, damping: 18, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 280, damping: 18, mass: 0.4 })

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (!fine || reduced) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-flex ${className}`}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </motion.div>
  )
}
