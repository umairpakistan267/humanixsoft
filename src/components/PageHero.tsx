import { motion } from 'framer-motion'
import { ease } from '../motion'
import { SplitText } from './SplitText'

type Props = {
  eyebrow: string
  title: string
  italic?: string
  copy: string
}

export function PageHero({ eyebrow, title, italic, copy }: Props) {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
      <div className="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-ember/10 blur-3xl" />
      <motion.p
        className="text-[11px] uppercase tracking-[0.28em] text-copper"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        {eyebrow}
      </motion.p>
      <h1 className="font-display mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">
        <SplitText text={title} delay={0.08} />
        {italic ? (
          <motion.span
            className="font-serif block font-normal italic gradient-ember sm:inline"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease }}
          >
            {italic}
          </motion.span>
        ) : null}
      </h1>
      <motion.p
        className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7, ease }}
      >
        {copy}
      </motion.p>
    </section>
  )
}
