import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'
import { insights } from '../data'

export function Insights() {
  usePageMeta(
    'Insights · HumanixSoft',
    'Notes from the forge — delivery, discovery, and product craft from HumanixSoft.',
  )

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the heat."
        copy="How we think about squads, discovery, and software operators will actually open. Short, opinionated, no newsletter theatre."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70}>
              <Link to={`/insights/${post.slug}`} className="group block h-full" data-cursor>
                <motion.article
                  className="flex h-full flex-col rounded-[28px] border border-line bg-ink-2 p-8 transition hover:border-copper"
                  whileHover={{ y: -6 }}
                >
                  <p className="text-[11px] tracking-[0.2em] text-ember uppercase">
                    {post.eyebrow} · {post.date}
                  </p>
                  <h2 className="font-display mt-4 text-2xl font-semibold transition group-hover:text-ember-2">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.summary}</p>
                  <p className="mt-6 text-xs text-copper">{post.read} read →</p>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
