import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { usePageMeta } from '../components/usePageMeta'
import { insights } from '../data'

export function InsightDetail() {
  const { slug } = useParams()
  const post = insights.find((item) => item.slug === slug)

  usePageMeta(post ? `${post.title} · HumanixSoft` : 'Insights · HumanixSoft', post?.summary ?? 'Notes from the forge.')

  if (!post) return <Navigate to="/insights" replace />

  const others = insights.filter((item) => item.slug !== post.slug)

  return (
    <>
      <PageHero eyebrow={`${post.eyebrow} · ${post.date}`} title={post.title} copy={post.summary} />

      <article className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        {post.body.map((para) => (
          <p key={para.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-paper/80">
            {para}
          </p>
        ))}
        <p className="mt-10 text-sm text-muted">{post.read} read</p>
      </article>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold">More notes</h2>
            <Link to="/insights" className="text-sm text-copper hover:text-ember">
              All insights
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={`/insights/${item.slug}`}
                className="rounded-2xl border border-line bg-ink-2 p-6 transition hover:border-copper"
                data-cursor
              >
                <p className="text-[11px] tracking-[0.18em] text-ember uppercase">{item.eyebrow}</p>
                <p className="font-display mt-2 text-xl font-semibold">{item.title}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Button to="/contact">Start a project</Button>
          </div>
        </div>
      </section>
    </>
  )
}
