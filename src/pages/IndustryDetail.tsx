import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { WorkCard } from '../components/WorkCard'
import { usePageMeta } from '../components/usePageMeta'
import { industries, projects } from '../data'

export function IndustryDetail() {
  const { slug } = useParams()
  const industry = industries.find((item) => item.slug === slug)

  usePageMeta(
    industry ? `${industry.title} · HumanixSoft` : 'Industries · HumanixSoft',
    industry?.summary ?? 'Industries we build for.',
  )

  if (!industry) return <Navigate to="/industries" replace />

  const related = projects.filter((project) => (industry.related as readonly string[]).includes(project.slug))

  return (
    <>
      <PageHero eyebrow={industry.title} title={industry.title} copy={industry.copy} />

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industry.points.map((point) => (
            <Reveal key={point}>
              <article className="rounded-2xl border border-line bg-ink-2 px-5 py-6 text-sm text-paper/85">{point}</article>
            </Reveal>
          ))}
        </div>
      </section>

      {related.length ? (
        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold">Related work</h2>
            <Link to="/work" className="text-sm text-copper hover:text-ember">
              All work
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2" style={{ perspective: 1200 }}>
            {related.map((project) => (
              <WorkCard key={project.slug} project={project} size="compact" />
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-t border-line px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-semibold">Building in this room?</p>
          <Button to="/contact">Start a project</Button>
        </div>
      </section>
    </>
  )
}
