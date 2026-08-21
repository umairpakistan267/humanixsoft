import { useMemo, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SplitText } from '../components/SplitText'
import { usePageMeta } from '../components/usePageMeta'
import { budgets, contactServices, faqs, jobs } from '../data'
import { ease } from '../motion'

type Fields = {
  name: string
  email: string
  company: string
  budget: string
  service: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = {
  name: '',
  email: '',
  company: '',
  budget: '',
  service: '',
  message: '',
}

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (fields.name.trim().length < 2) errors.name = 'Please tell us your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = 'A real email helps us reply.'
  if (!fields.service) errors.service = 'Pick the closest fit — we can refine later.'
  if (fields.message.trim().length < 24) errors.message = 'A little more context (at least a sentence or two).'
  return errors
}

export function Contact() {
  usePageMeta(
    'Contact · HumanixSoft',
    'Start a project with HumanixSoft. Tell us what you want to forge — we reply within two working days.',
  )

  const [params] = useSearchParams()
  const role = params.get('role')
  const roleTitle = jobs.find((job) => job.id === role)?.title

  const initial = useMemo<Fields>(() => {
    if (!roleTitle) return empty
    return {
      ...empty,
      service: 'Something else',
      message: `I am applying for ${roleTitle}.\n\n`,
    }
  }, [roleTitle])

  const [fields, setFields] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      const next = { ...errors }
      delete next[key]
      setErrors(next)
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('done')
    }, 700)
  }

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-14 px-5 pt-32 pb-24 sm:px-8 sm:pt-40 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <motion.p
            className="text-[11px] uppercase tracking-[0.28em] text-copper"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            Contact
          </motion.p>
          <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            <SplitText text={roleTitle ? 'Apply to the forge.' : 'Put it on the anvil.'} delay={0.08} />
          </h1>
          <motion.p
            className="mt-5 leading-relaxed text-muted"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease }}
          >
            {roleTitle
              ? `You are writing about ${roleTitle}. Tell us who you are and why the work fits.`
              : 'Share the problem, the deadline, and what “good” looks like. We reply within two working days.'}
          </motion.p>
          <div className="mt-10 space-y-6 text-sm">
            <div>
              <p className="text-copper uppercase tracking-[0.18em] text-[11px]">Email</p>
              <a href="mailto:hello@humanixsoft.com" className="mt-1 block text-paper hover:text-ember">
                hello@humanixsoft.com
              </a>
            </div>
            <div>
              <p className="text-copper uppercase tracking-[0.18em] text-[11px]">Studio</p>
              <p className="mt-1 text-paper/80">Clifton, Karachi · Pakistan</p>
            </div>
            <div>
              <p className="text-copper uppercase tracking-[0.18em] text-[11px]">Hours</p>
              <p className="mt-1 text-paper/80">Monday–Friday, 10:00–18:00 PKT</p>
            </div>
          </div>
        </div>

        <motion.div
          className="rounded-[28px] border border-line bg-ink-2 p-6 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {status === 'done' ? (
            <div className="flex min-h-[360px] flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember">Received</p>
              <h2 className="font-display mt-3 text-3xl font-semibold">It is in the fire.</h2>
              <p className="mt-4 max-w-md text-muted">
                Thank you, {fields.name.trim().split(' ')[0]}. We will write to {fields.email} shortly. If it is urgent, copy the same note to hello@humanixsoft.com.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5">
              <label className="block">
                <span className="text-xs text-muted">Name</span>
                <input
                  value={fields.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-paper"
                  autoComplete="name"
                />
                {errors.name ? <p className="mt-1 text-xs text-ember">{errors.name}</p> : null}
              </label>
              <label className="block">
                <span className="text-xs text-muted">Email</span>
                <input
                  type="email"
                  value={fields.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-paper"
                  autoComplete="email"
                />
                {errors.email ? <p className="mt-1 text-xs text-ember">{errors.email}</p> : null}
              </label>
              <label className="block">
                <span className="text-xs text-muted">Company (optional)</span>
                <input
                  value={fields.company}
                  onChange={(e) => update('company', e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-paper"
                  autoComplete="organization"
                />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs text-muted">Need</span>
                  <select
                    value={fields.service}
                    onChange={(e) => update('service', e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-paper"
                  >
                    <option value="">Select…</option>
                    {contactServices.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.service ? <p className="mt-1 text-xs text-ember">{errors.service}</p> : null}
                </label>
                <label className="block">
                  <span className="text-xs text-muted">Budget</span>
                  <select
                    value={fields.budget}
                    onChange={(e) => update('budget', e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-paper"
                  >
                    <option value="">Select…</option>
                    {budgets.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-xs text-muted">What should we forge?</span>
                <textarea
                  value={fields.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={5}
                  className="mt-2 w-full resize-y rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-paper"
                />
                {errors.message ? <p className="mt-1 text-xs text-ember">{errors.message}</p> : null}
              </label>
              <Button type="submit" className="w-full sm:w-auto">
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          )}
        </motion.div>
      </section>

      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold">Questions we hear first.</h2>
          <div className="mt-10 divide-y divide-line">
            {faqs.map((item) => (
              <Reveal key={item.q}>
                <details className="group py-5">
                  <summary className="cursor-pointer list-none font-medium text-paper [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <span className="text-ember group-open:rotate-45 transition">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
