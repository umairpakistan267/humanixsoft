import { motion } from 'framer-motion'
import { ease } from '../motion'

type Props = {
  eyebrow: string
  title: string
  copy?: string
  light?: boolean
}

export function SectionHeader({ eyebrow, title, copy, light = false }: Props) {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease }}
    >
      <p className={`text-[11px] font-medium uppercase tracking-[0.28em] ${light ? 'text-ember' : 'text-copper'}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display mt-3 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl ${light ? 'text-ink' : 'text-paper'}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${light ? 'text-ink/65' : 'text-muted'}`}>
          {copy}
        </p>
      ) : null}
    </motion.div>
  )
}
