import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'
import { WorkCard } from '../components/WorkCard'
import { projects } from '../data'
import { ease } from '../motion'

export function WorkDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  usePageMeta(
    project ? `${project.name} · HumanixSoft` : 'Work · HumanixSoft',
    project?.summary ?? 'Selected product work from HumanixSoft.',
  )

  if (!project) {
    return <Navigate to="/work" replace />
  }

  const others = projects.filter((item) => item.slug !== project.slug).slice(0, 2)

  return (
    <>
      <section className="pt-28 sm:pt-32" style={{ background: project.surface, color: project.ink }}>
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <Link to="/work" className="text-xs uppercase tracking-[0.2em] opacity-60 hover:opacity-100">
            ← All work
          </Link>
          <motion.p
            className="mt-8 text-sm tracking-[0.16em] uppercase"
            style={{ color: project.accent }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            {project.sector} · {project.year}
          </motion.p>
          <motion.h1
            className="font-display mt-3 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg opacity-75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            {project.summary}
          </motion.p>
          <motion.p
            className="font-display mt-6 text-2xl"
            style={{ color: project.accent }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {project.metric}
          </motion.p>

          <motion.div
            className="mt-10 overflow-hidden rounded-2xl border border-black/10 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <div className="flex items-center gap-2 px-3 py-2" style={{ background: project.chrome }}>
              <span className="flex gap-1" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-white/35" />
                <span className="h-2 w-2 rounded-full bg-white/35" />
                <span className="h-2 w-2 rounded-full bg-white/35" />
              </span>
              <span className="text-[10px] tracking-[0.14em] text-white/80 uppercase">
                {project.name} · {project.sector}
              </span>
            </div>
            <img src={project.image} alt={`${project.name} interface`} className="w-full bg-white object-contain object-top" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-3">
        <Reveal>
          <h2 className="text-[11px] uppercase tracking-[0.22em]" style={{ color: project.accent }}>
            Challenge
          </h2>
          <p className="mt-4 leading-relaxed text-paper/80">{project.challenge}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-[11px] uppercase tracking-[0.22em]" style={{ color: project.accent }}>
            Approach
          </h2>
          <p className="mt-4 leading-relaxed text-paper/80">{project.approach}</p>
        </Reveal>
        <Reveal delay={160}>
          <h2 className="text-[11px] uppercase tracking-[0.22em]" style={{ color: project.accent }}>
            Outcome
          </h2>
          <p className="mt-4 leading-relaxed text-paper/80">{project.outcome}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: project.accent }}>
          Stack
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-line px-4 py-2 text-sm text-muted">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold">More work</h2>
            <Button to="/contact" variant="ghost">
              Start yours
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2" style={{ perspective: 1200 }}>
            {others.map((item) => (
              <WorkCard key={item.slug} project={item} size="compact" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
