import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMeta } from '../components/usePageMeta'
import { hireModels, hireRoles } from '../data'

export function Hire() {
  usePageMeta(
    'Hire developers · HumanixSoft',
    'Staff augmentation and dedicated squads from HumanixSoft — senior engineers and designers who already know how to ship.',
  )

  return (
    <>
      <PageHero
        eyebrow="Hire"
        title="Staff your product"
        italic="without a recruiting opera."
        copy="Need a React seat next month, or a squad that already argues well? We place senior people into your repo — or we bring a forge that operates as yours."
      />

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {hireModels.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <motion.article
                className="h-full rounded-[28px] border border-line bg-ink-2 p-8"
                whileHover={{ y: -6, borderColor: 'rgb(var(--glow) / 0.4)' }}
              >
                <h2 className="font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-ember">{item.time}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.copy}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Roles"
            title="What we typically staff."
            copy="These are seats we fill often. If you need something adjacent, say so — we will tell you honestly if we have it."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hireRoles.map((role, i) => (
              <Reveal key={role.title} delay={i * 40}>
                <article className="rounded-2xl border border-line bg-ink p-6">
                  <h3 className="font-medium">{role.title}</h3>
                  <p className="mt-2 text-sm text-muted">{role.stack}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="How hiring works" title="As easy as a serious conversation." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            { n: '01', title: 'Brief', copy: 'Role, stack, timezone, and what “good” looks like in the first 30 days.' },
            { n: '02', title: 'Match', copy: 'We introduce people who have shipped this kind of work — not a CV lottery.' },
            { n: '03', title: 'Start', copy: 'They join your Slack and your repo. We stay on the hook for the first month.' },
          ].map((step, i) => (
            <Reveal key={step.n} delay={i * 70}>
              <p className="text-[11px] tracking-[0.22em] text-ember">{step.n}</p>
              <h3 className="font-display mt-3 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button to="/contact">Request talent</Button>
        </div>
      </section>
    </>
  )
}
