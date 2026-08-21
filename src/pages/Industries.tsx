import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'
import { industries } from '../data'

export function Industries() {
  usePageMeta(
    'Industries · HumanixSoft',
    'HumanixSoft builds for finance, retail, education, HR, inventory, and enterprise operations.',
  )

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="We know the floor,"
        italic="not only the RFP."
        copy="Finance, retail, education, people ops, inventory, and enterprise. The products on our Work page came from these rooms."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal key={item.slug} delay={i * 50}>
              <Link to={`/industries/${item.slug}`} className="group block h-full" data-cursor>
                <motion.article
                  className="flex h-full flex-col rounded-[28px] border border-line bg-ink-2 p-8 transition hover:border-copper"
                  whileHover={{ y: -6 }}
                >
                  <p className="text-[11px] tracking-[0.22em] text-ember">{item.eyebrow}</p>
                  <h2 className="font-display mt-3 text-2xl font-semibold transition group-hover:text-ember-2">{item.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.summary}</p>
                  <p className="mt-6 text-xs tracking-[0.16em] text-copper uppercase">Explore →</p>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <Button to="/contact">Talk industries</Button>
        </div>
      </section>
    </>
  )
}
