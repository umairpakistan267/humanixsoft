import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { ForgeMark } from './ForgeMark'
import { ease } from '../motion'

type Props = {
  onDone: () => void
}

export function Preloader({ onDone }: Props) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      sessionStorage.setItem('hx-in', '1')
      onDone()
    }, 1750)
    return () => window.clearTimeout(timer)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ y: '-100%', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <ForgeMark className="h-[88px] w-[88px]" />
      </motion.div>
      <motion.p
        className="font-display mt-6 text-lg font-semibold tracking-tight"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease }}
      >
        Humanix<span className="text-ember">Soft</span>
      </motion.p>
      <div className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-line">
        <motion.div
          className="h-full origin-left bg-ember"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.45, ease }}
        />
      </div>
    </motion.div>
  )
}
