import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { SplitText } from '../components/SplitText'
import { usePageMeta } from '../components/usePageMeta'
import { ease } from '../motion'

export function NotFound() {
  usePageMeta('Not found · HumanixSoft', 'This page cooled off the anvil.')

  return (
    <section className="mx-auto flex min-h-[70svh] max-w-3xl flex-col justify-center px-5 pt-32 pb-24 sm:px-8">
      <motion.p
        className="text-[11px] uppercase tracking-[0.28em] text-copper"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        404
      </motion.p>
      <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
        <SplitText text="This piece never made it out of the fire." delay={0.08} />
      </h1>
      <motion.p
        className="mt-5 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        The page is gone, or it never existed. The rest of the studio is still warm.
      </motion.p>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5, ease }}
      >
        <Button to="/">Back home</Button>
      </motion.div>
    </section>
  )
}
