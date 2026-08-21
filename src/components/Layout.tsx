import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { ease, useFinePointer, usePrefersReducedMotion } from '../motion'
import { Cursor } from './Cursor'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Preloader } from './Preloader'

function AnimatedOutlet() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.48, ease }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  )
}

function Spotlight() {
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const [pos, setPos] = useState({ x: -400, y: -400 })

  useEffect(() => {
    if (!fine || reduced) return
    const move = (event: MouseEvent) => setPos({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [fine, reduced])

  if (!fine || reduced) return null

  return (
    <div
      aria-hidden
      className="spotlight pointer-events-none fixed z-20 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{ left: pos.x, top: pos.y }}
    />
  )
}

export function Layout() {
  const { pathname } = useLocation()
  const reduced = usePrefersReducedMotion()
  const [booting, setBooting] = useState(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem('hx-in') !== '1'
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }, [pathname, reduced])

  return (
    <div className="relative min-h-svh bg-ink text-paper">
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Spotlight />
      <AnimatePresence>{booting && !reduced ? <Preloader onDone={() => setBooting(false)} /> : null}</AnimatePresence>
      <Navbar />
      <main>
        <AnimatedOutlet />
      </main>
      <Footer />
    </div>
  )
}
