import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { ease } from '../motion'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, delay: delay / 1000, ease }}
    >
      {children}
    </motion.div>
  )
}
