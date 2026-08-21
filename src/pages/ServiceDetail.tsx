import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'
import { services } from '../data'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  usePageMeta(
    service ? `${service.title} · HumanixSoft` : 'Services · HumanixSoft',
    service?.summary ?? 'Services from HumanixSoft.',
  )

  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((item) => item.slug !== service.slug)

  return (
    <>
      <PageHero eyebrow={`Service ${service.eyebrow}`} title={service.title} copy={service.copy} />

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {service.points.map((point) => (
            <Reveal key={point}>
              <article className="rounded-2xl border border-line bg-ink-2 px-5 py-6 text-paper/85">{point}</article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button to="/contact">Start this engagement</Button>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-semibold">Other ways in</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="rounded-2xl border border-line bg-ink-2 p-6 transition hover:border-copper"
                data-cursor
              >
                <p className="text-[11px] tracking-[0.18em] text-ember">{item.eyebrow}</p>
                <p className="font-display mt-2 text-xl font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-muted">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
