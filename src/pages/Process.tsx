import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'
import { faqs, processSteps } from '../data'

export function Process() {
  usePageMeta(
    'Process · HumanixSoft',
    'How HumanixSoft discovers, shapes, forges, hardens, launches, and evolves products.',
  )

  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A path with checkpoints."
        copy="You always know what is in the fire and what comes off the anvil next. No six-month mystery tours."
      />

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 40}>
              <motion.article
                className="rounded-[28px] border border-line bg-ink-2 p-8"
                whileHover={{ y: -4, borderColor: 'rgb(var(--glow) / 0.4)' }}
              >
                <p className="text-[11px] tracking-[0.22em] text-ember">{step.n}</p>
                <h2 className="font-display mt-3 text-3xl font-semibold">{step.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{step.copy}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold">Questions we hear first</h2>
          <div className="mt-10 space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-t border-line pt-6">
                <h3 className="font-medium">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button to="/contact">Start with discovery</Button>
          </div>
        </div>
      </section>
    </>
  )
}
