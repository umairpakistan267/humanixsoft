import { motion } from 'framer-motion'
import { ease } from '../motion'

type Props = {
  text: string
  className?: string
  delay?: number
}

export function SplitText({ text, className = '', delay = 0 }: Props) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '115%', rotate: 6 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.95, delay: delay + i * 0.07, ease }}
          >
            {word}
            {'\u00A0'}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
