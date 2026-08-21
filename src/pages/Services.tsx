import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMeta } from '../components/usePageMeta'
import { services } from '../data'

export function Services() {
  usePageMeta(
    'Services · HumanixSoft',
    'Product engineering, mobile, design, cloud, AI, and dedicated teams from HumanixSoft.',
  )

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full-stack craft,"
        italic="not a menu of extras."
        copy="We design, build, and run products as one studio. You do not get a design sprint from one vendor and a backend from another — you get a forge."
      />

      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <div className="space-y-6">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <Link to={`/services/${service.slug}`} className="block" data-cursor>
                <motion.article
                  className="grid gap-8 rounded-[28px] border border-line bg-ink-2 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12"
                  whileHover={{ y: -6, borderColor: 'rgb(var(--glow) / 0.45)' }}
                >
                <div>
                  <p className="text-[11px] tracking-[0.22em] text-ember">{service.eyebrow}</p>
                  <h2 className="font-display mt-3 text-3xl font-semibold">{service.title}</h2>
                  <p className="mt-4 text-muted">{service.copy}</p>
                </div>
                <ul className="grid content-center gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li key={point} className="rounded-2xl border border-line bg-ink/50 px-4 py-4 text-sm text-paper/85">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader light eyebrow="Engagements" title="How we typically work together." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Product sprint',
                time: '2–4 weeks',
                copy: 'Discovery, prototype, and a build plan. Best when the problem is real but the shape is still smoke.',
              },
              {
                title: 'Build',
                time: '8–16 weeks',
                copy: 'A scoped product or a decisive slice: MVP, rebuild, or the module your team cannot staff.',
              },
              {
                title: 'Dedicated squad',
                time: 'Monthly',
                copy: 'A small senior team that operates as yours. Roadmap, delivery, and the long heat after launch.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <motion.article
                  className="h-full rounded-3xl border border-ink/10 bg-paper-2 p-8"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                >
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ember">{item.time}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/65">{item.copy}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Button to="/contact" variant="ink">
              Tell us what you need
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
