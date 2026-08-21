import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMeta } from '../components/usePageMeta'
import { team, timeline, values, purpose } from '../data'

export function About() {
  usePageMeta(
    'About · HumanixSoft',
    'HumanixSoft is a Karachi-rooted product studio. We forge web, mobile, cloud, and AI software with a small senior team.',
  )

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A studio named after the work,"
        italic="not the slide deck."
        copy="HumanixSoft started because too much software is assembled, not made. We are a small house of engineers and designers who still believe heat, pressure, and taste belong in the same room."
      />

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {purpose.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <motion.article
                className="h-full rounded-[28px] border border-line bg-ink-2 p-8 sm:p-10"
                whileHover={{ y: -6, borderColor: 'rgb(var(--glow) / 0.45)' }}
              >
                <p className="text-[11px] tracking-[0.22em] text-ember uppercase">{item.title}</p>
                <p className="font-serif mt-5 text-xl leading-relaxed text-paper/90 italic sm:text-2xl">“{item.copy}”</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 70}>
              <motion.article
                className="rounded-3xl border border-line bg-ink-2 p-8"
                whileHover={{ y: -6, borderColor: 'rgb(var(--glow) / 0.4)' }}
              >
                <h2 className="font-display text-2xl font-semibold">{value.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{value.copy}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader eyebrow="Timeline" title="Still small on purpose." />
          <div className="mt-12">
            {timeline.map((item) => (
              <Reveal key={item.year}>
                <div className="grid gap-4 border-t border-line py-8 sm:grid-cols-[140px_1fr]">
                  <p className="font-display text-2xl font-semibold text-ember">{item.year}</p>
                  <p className="max-w-2xl leading-relaxed text-paper/80">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeader
          eyebrow="People"
          title="The hands on the work."
          copy="You will meet these humans — not a rotating cast of “resources.”"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, i) => (
            <Reveal key={person.name} delay={i * 50}>
              <motion.article
                className="flex items-center gap-4 rounded-3xl border border-line bg-ink-2 p-5"
                whileHover={{ y: -4, borderColor: 'rgb(var(--glow) / 0.4)' }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ember/15 font-display font-semibold text-ember">
                  {person.initials}
                </div>
                <div>
                  <p className="font-medium">{person.name}</p>
                  <p className="text-sm text-muted">{person.role}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button to="/careers" variant="ghost">
            Join HumanixSoft
          </Button>
        </div>
      </section>
    </>
  )
}
