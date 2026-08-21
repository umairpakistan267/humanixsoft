import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMeta } from '../components/usePageMeta'
import { jobs } from '../data'

export function Careers() {
  usePageMeta(
    'Careers · HumanixSoft',
    'Join HumanixSoft. Open roles for product engineers, designers, and platform people.',
  )

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Come for the craft."
        italic="Stay for the heat."
        copy="We hire people who want to own outcomes, not tickets. Seniority of mind matters more than years on a CV."
      />

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader light eyebrow="Culture" title="What it is like here." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal>
              <p className="font-display text-xl font-semibold">Fewer meetings, more making.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Written updates, weekly demos, and the kind of pairing that actually teaches.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="font-display text-xl font-semibold">Opinionated, not harsh.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                We argue about the work, then go to lunch. Ego does not get a seat at standup.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-display text-xl font-semibold">Karachi root, global hours.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Studio days in Clifton, remote-friendly roles, overlap that respects people with lives.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Open roles" title="If the metal calls." />
        <div className="mt-10 divide-y divide-line border-y border-line">
          {jobs.map((job) => (
            <Reveal key={job.id}>
              <motion.article
                className="grid gap-4 py-8 sm:grid-cols-[1fr_auto] sm:items-center"
                whileHover={{ x: 6 }}
              >
                <div>
                  <h2 className="font-display text-2xl font-semibold">{job.title}</h2>
                  <p className="mt-1 text-sm text-copper">
                    {job.type} · {job.location}
                  </p>
                  <p className="mt-3 max-w-xl text-sm text-muted">{job.blurb}</p>
                </div>
                <Link to={`/contact?role=${job.id}`} className="text-sm text-ember transition hover:text-ember-2">
                  Apply →
                </Link>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          No perfect listing? Write anyway —{' '}
          <a href="mailto:careers@humanixsoft.com" className="text-ember">
            careers@humanixsoft.com
          </a>
        </p>
        <div className="mt-8">
          <Button to="/contact">Send a note</Button>
        </div>
      </section>
    </>
  )
}
