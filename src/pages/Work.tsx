import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { PageHero } from '../components/PageHero'
import { usePageMeta } from '../components/usePageMeta'
import { WorkCard } from '../components/WorkCard'
import { projects } from '../data'

const filters = ['All', 'Web', 'Mobile', 'Cloud', 'Design'] as const

export function Work() {
  usePageMeta(
    'Work · HumanixSoft',
    'Selected product work from HumanixSoft — MathDigits, finance, inventory, HRMS, communication, shift sheets, and ERP.',
  )
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const visible = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((project) => project.tags.some((tag) => tag === filter))
  }, [filter])

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Proof, not promises."
        copy="MathDigits, finance, inventory, HRMS, communication, shift sheets, and ERP — products designed and built to hold in production."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`relative rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                filter === item ? 'text-ink' : 'border border-line text-muted hover:text-paper'
              }`}
            >
              {filter === item ? (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-0 rounded-full bg-ember"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              ) : null}
              <span className="relative z-10">{item}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12" style={{ perspective: 1200 }}>
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                className={filter === 'All' ? project.span : 'md:col-span-6'}
              >
                <WorkCard project={project} size={filter === 'All' && i === 0 ? 'featured' : 'default'} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  )
}
