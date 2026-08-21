import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { useFinePointer, usePrefersReducedMotion } from '../motion'

export function Cursor() {
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ringX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.35 })
  const ringY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.35 })
  const scale = useSpring(1, { stiffness: 260, damping: 20 })

  useEffect(() => {
    if (!fine || reduced) return

    document.documentElement.classList.add('cursor-on')

    const move = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    const over = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const hot = target.closest('a, button, summary, input, textarea, select, [data-cursor]')
      scale.set(hot ? 2.35 : 1)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)

    return () => {
      document.documentElement.classList.remove('cursor-on')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [fine, reduced, scale, x, y])

  if (!fine || reduced) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[90] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[90] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember/70"
        style={{ x: ringX, y: ringY, scale }}
      />
    </>
  )
}
