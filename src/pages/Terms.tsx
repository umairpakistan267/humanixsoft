import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { usePageMeta } from '../components/usePageMeta'

export function Terms() {
  usePageMeta('Terms · HumanixSoft', 'Terms of use for the HumanixSoft website.')

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        copy="This website describes the studio. A project starts with a written agreement — not with these pages."
      />
      <article className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="space-y-8 text-paper/80 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold text-paper">The site</h2>
            <p className="mt-3">
              Content here is for information. Case studies, metrics, and names describe the kind of work we take. Engagements are governed by a statement of work or contract we both sign.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-paper">Your use</h2>
            <p className="mt-3">
              Do not scrape, impersonate, or misuse the contact form. Do not copy our writing or brand as your own.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-paper">Liability</h2>
            <p className="mt-3">
              The site is provided as-is. We are not liable for decisions you make solely from reading it. Project warranties live in the contract, if we have one.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-paper">Contact</h2>
            <p className="mt-3">
              <a href="mailto:hello@humanixsoft.com" className="text-ember">
                hello@humanixsoft.com
              </a>
              . Privacy details are on our{' '}
              <Link to="/privacy" className="text-ember">
                privacy page
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
