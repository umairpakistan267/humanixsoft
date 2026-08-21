import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data'
import { useFinePointer, usePrefersReducedMotion } from '../motion'
import { TiltCard } from './TiltCard'

type Project = (typeof projects)[number]

type Props = {
  project: Project
  size?: 'featured' | 'default' | 'compact'
}

export function WorkCard({ project, size = 'default' }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const [hover, setHover] = useState(false)
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 24 })
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 24 })
  const compact = size === 'compact'
  const featured = size === 'featured'
  const shotHeight = compact ? 'h-[160px]' : featured ? 'h-[280px] sm:h-[360px]' : 'h-[220px] sm:h-[280px]'

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (!fine || reduced || event.pointerType !== 'mouse') return
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set(event.clientX - rect.left - 44)
    y.set(event.clientY - rect.top - 44)
  }

  return (
    <TiltCard className="h-full overflow-hidden rounded-2xl border border-line bg-ink-2">
      <div ref={cardRef} className="h-full" onPointerMove={onMove} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
        <Link to={`/work/${project.slug}`} className="group relative block h-full" data-cursor>
          <div className="flex h-full flex-col" style={{ background: project.surface, color: project.ink }}>
            <div className="flex items-center gap-2 px-3 py-2" style={{ background: project.chrome }}>
              <span className="flex gap-1" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-white/35" />
                <span className="h-2 w-2 rounded-full bg-white/35" />
                <span className="h-2 w-2 rounded-full bg-white/35" />
              </span>
              <span className="truncate text-[10px] tracking-[0.14em] text-white/80 uppercase">
                {project.name} · {project.sector}
              </span>
            </div>
            <div className={`relative overflow-hidden bg-white ${shotHeight}`}>
              <img
                src={project.image}
                alt={`${project.name} — ${project.sector}`}
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className={`flex flex-1 flex-col justify-between ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase" style={{ color: project.accent }}>
                  {project.sector} · {project.year}
                </p>
                <h3 className={`font-display mt-1 font-semibold tracking-tight ${compact ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>{project.name}</h3>
                {compact ? null : <p className="mt-2 text-sm leading-relaxed opacity-70">{project.title}</p>}
              </div>
              <p className="mt-4 text-sm font-medium" style={{ color: project.accent }}>
                {project.metric}
              </p>
            </div>
          </div>
          {fine && !reduced && !compact ? (
            <motion.div
              className="pointer-events-none absolute top-0 left-0 z-10 hidden h-[88px] w-[88px] items-center justify-center rounded-full text-xs font-semibold tracking-[0.16em] uppercase md:flex"
              style={{ x, y, background: project.accent, color: '#fff' }}
              animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.6 }}
              transition={{ duration: 0.22 }}
            >
              View
            </motion.div>
          ) : null}
        </Link>
      </div>
    </TiltCard>
  )
}
