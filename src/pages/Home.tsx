import { motion, useSpring, useTransform } from 'framer-motion'
import { type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { CountUp } from '../components/CountUp'
import { EmberField } from '../components/EmberField'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { SplitText } from '../components/SplitText'
import { usePageMeta } from '../components/usePageMeta'
import { WorkCard } from '../components/WorkCard'
import { processSteps, projects, services, stats, technologies, testimonials, industries, insights, purpose } from '../data'
import { ease, useFinePointer, usePrefersReducedMotion } from '../motion'

function ForgeCore() {
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const mx = useSpring(0, { stiffness: 80, damping: 18 })
  const my = useSpring(0, { stiffness: 80, damping: 18 })
  const rotateY = useTransform(mx, [-40, 40], [-10, 10])
  const rotateX = useTransform(my, [-40, 40], [8, -8])

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (!fine || reduced) return
    const rect = event.currentTarget.getBoundingClientRect()
    mx.set(event.clientX - (rect.left + rect.width / 2))
    my.set(event.clientY - (rect.top + rect.height / 2))
  }

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[500px]"
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0)
        my.set(0)
      }}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.25, ease }}
    >
      <div className="glow-core ember-pulse absolute inset-[12%] rounded-full blur-2xl" />
      <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-copper/30" />
      <div className="spin-reverse absolute inset-8 rounded-full border border-line-strong" />
      <motion.div
        className="absolute inset-[22%] rounded-full border border-ember/40 bg-ink-2/80"
        animate={{
          boxShadow: [
            'inset 0 0 80px rgb(var(--glow) / 0.18)',
            'inset 0 0 110px rgb(var(--glow-2) / 0.28)',
            'inset 0 0 80px rgb(var(--glow) / 0.18)',
          ],
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-[22%] flex flex-col items-center justify-center">
        <p className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
          H<span className="gradient-ember">U</span>
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-copper">Est. 2019</p>
      </div>
      <motion.span
        className="dot-glow absolute top-[8%] right-[18%] h-2.5 w-2.5 rounded-full bg-ember"
        animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute bottom-[16%] left-[12%] h-2 w-2 rounded-full bg-copper"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />
      <motion.span
        className="absolute top-[42%] right-[6%] h-1.5 w-1.5 rounded-full bg-ember-2"
        animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
      />
    </motion.div>
  )
}

export function Home() {
  usePageMeta(
    'HumanixSoft — Software, built with intent',
    'HumanixSoft is a product studio that designs and builds web, mobile, cloud, and AI software for ambitious companies.',
  )

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <EmberField />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
        <div className="relative z-[2] mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              className="text-[11px] font-medium uppercase tracking-[0.32em] text-copper"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              Software house · Karachi · Worldwide
            </motion.p>
            <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[0.98] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <SplitText text="We forge products" delay={0.12} />
              <motion.span
                className="font-serif block font-normal italic gradient-ember"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.9, ease }}
              >
                that hold.
              </motion.span>
            </h1>
            <motion.p
              className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease }}
            >
              HumanixSoft is a product studio for companies that need software built with craft — web, mobile, cloud, and AI, from the first spark to the last deploy.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease }}
            >
              <Button to="/contact">Start a project</Button>
              <Button to="/work" variant="ghost">
                See the work
              </Button>
            </motion.div>
          </div>
          <ForgeCore />
        </div>
      </section>

      <div className="relative overflow-hidden border-y border-line py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="marquee-track flex items-center gap-10 px-8 text-[13px] uppercase tracking-[0.22em] text-muted">
          {[...technologies, ...technologies].map((tech, i) => (
            <span key={`${tech}-${i}`} className="flex items-center gap-10">
              {tech}
              <span className="text-ember">/</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-display max-w-4xl text-2xl leading-snug font-medium tracking-tight text-paper sm:text-4xl">
            Most shops pitch. We heat the metal.{' '}
            <span className="text-muted">Small senior teams, honest estimates, and software that still stands after the launch party.</span>
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-4">
          {stats.map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <CountUp
                amount={item.amount}
                suffix={item.suffix}
                className="font-display text-4xl font-semibold text-ember sm:text-5xl"
              />
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader eyebrow="Purpose" title="Where we are going, and how we work." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {purpose.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="h-full rounded-[28px] border border-line bg-ink p-8 sm:p-10">
                  <p className="text-[11px] tracking-[0.22em] text-ember uppercase">{item.title}</p>
                  <p className="font-serif mt-5 text-xl leading-relaxed text-paper/90 italic sm:text-[1.35rem]">“{item.copy}”</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Selected work"
            title="Things we have put through the fire."
            copy="MathDigits, finance, inventory, HRMS, communication, shift sheets, and ERP — each one started as a messy brief and left as something people use."
          />
          <Button to="/work" variant="ghost" className="shrink-0">
            All work
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12" style={{ perspective: 1200 }}>
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 50} className={project.span}>
              <WorkCard project={project} size={i === 0 ? 'featured' : 'default'} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Six ways we work the metal."
            copy="Pick a starting point. The engagement can grow — the craft stays the same."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 50}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block h-full overflow-hidden bg-ink-2 p-8 transition duration-300 hover:bg-ink-3"
                >
                  <p className="text-[11px] tracking-[0.22em] text-ember">{service.eyebrow}</p>
                  <h3 className="font-display mt-4 text-2xl font-semibold transition group-hover:text-ember-2">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-ember transition duration-500 ease-out group-hover:scale-x-100" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            light
            eyebrow="The process"
            title="Heat, pressure, then a clean edge."
            copy="A path with checkpoints. You always know what is in the fire and what comes off the anvil next."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <motion.article
                  className="h-full rounded-3xl border border-ink/10 bg-paper-2 p-7"
                  whileHover={{ y: -8, boxShadow: '0 24px 50px rgba(10,11,13,0.12)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                >
                  <p className="font-display text-ember text-sm font-semibold">{step.n}</p>
                  <h3 className="font-display mt-3 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{step.copy}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/process" variant="ink">
              See the full process
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-line py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Industries"
              title="Rooms we already know."
              copy="Finance, retail, education, HR, inventory, and enterprise — the same floors as the work on this site."
            />
            <Button to="/industries" variant="ghost" className="shrink-0">
              All industries
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, i) => (
              <Reveal key={item.slug} delay={i * 40}>
                <Link
                  to={`/industries/${item.slug}`}
                  className="group block rounded-2xl border border-line bg-ink-2 p-6 transition hover:border-copper"
                  data-cursor
                >
                  <p className="text-[11px] tracking-[0.2em] text-ember">{item.eyebrow}</p>
                  <h3 className="font-display mt-2 text-xl font-semibold transition group-hover:text-ember-2">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Insights" title="Notes from the heat." />
          <Button to="/insights" variant="ghost" className="shrink-0">
            All insights
          </Button>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70}>
              <Link
                to={`/insights/${post.slug}`}
                className="group flex h-full flex-col rounded-[28px] border border-line bg-ink-2 p-8 transition hover:border-copper"
                data-cursor
              >
                <p className="text-[11px] tracking-[0.2em] text-ember uppercase">{post.eyebrow}</p>
                <h3 className="font-display mt-4 text-2xl font-semibold transition group-hover:text-ember-2">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted">{post.summary}</p>
                <p className="mt-6 text-xs text-copper">{post.read} →</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-copper uppercase">Hire</p>
            <h2 className="font-display mt-2 text-3xl font-semibold">Need a squad or a seat filled?</h2>
            <p className="mt-2 max-w-xl text-muted">Staff augmentation and dedicated teams — senior people who already know how to ship.</p>
          </div>
          <Button to="/hire">Hire developers</Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Clients" title="What it feels like on the other side of the forge." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <motion.blockquote
                className="flex h-full flex-col justify-between rounded-3xl border border-line bg-ink-2 p-8"
                whileHover={{ y: -6, borderColor: 'rgb(var(--glow) / 0.45)' }}
              >
                <p className="font-serif text-xl leading-relaxed text-paper/90 italic">“{item.quote}”</p>
                <footer className="mt-8">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line">
        <motion.div
          aria-hidden
          className="glow-cta pointer-events-none absolute -left-20 top-0 h-full w-[55%]"
          animate={{ x: [0, 40, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-copper">Ready?</p>
            <h2 className="font-display mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Bring us something worth forging.
            </h2>
          </div>
          <Button to="/contact" variant="paper" className="shrink-0">
            Talk to HumanixSoft
          </Button>
        </div>
      </section>
    </>
  )
}
