import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'
import { techStacks } from '../data'

export function Technologies() {
  usePageMeta(
    'Technologies · HumanixSoft',
    'The stack HumanixSoft ships with — web, mobile, backend, cloud, data, and design.',
  )

  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="The metal we actually work."
        copy="Tools are not a personality. These are the ones we ship with — chosen because they hold in production, not because they trend this quarter."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStacks.map((group, i) => (
            <Reveal key={group.title} delay={i * 50}>
              <motion.article
                className="h-full rounded-[28px] border border-line bg-ink-2 p-8"
                whileHover={{ y: -6, borderColor: 'rgb(var(--glow) / 0.4)' }}
              >
                <h2 className="font-display text-2xl font-semibold">{group.title}</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-line px-3 py-1.5 text-sm text-paper/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-3">
          <Button to="/hire">Hire this stack</Button>
          <Button to="/contact" variant="ghost">
            Start a build
          </Button>
        </div>
      </section>
    </>
  )
}
