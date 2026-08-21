import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { usePageMeta } from '../components/usePageMeta'

export function Privacy() {
  usePageMeta('Privacy · HumanixSoft', 'How HumanixSoft handles information you share with the studio.')

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        copy="A short account of what we collect, why, and how long we keep it. This is a studio site — not a surveillance product."
      />
      <article className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="space-y-8 text-paper/80 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold text-paper">What we collect</h2>
            <p className="mt-3">
              If you write to us via the contact form, we receive your name, email, company (if you give it), budget range, service interest, and message. We use that only to reply and to scope work.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-paper">What we do not do</h2>
            <p className="mt-3">
              We do not sell your details. We do not run a marketing drip from this form. Theme preference is stored in your browser (localStorage) and is not sent to us.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-paper">How long</h2>
            <p className="mt-3">
              Enquiry notes are kept as long as we need them to do the work or to close the conversation. Ask us to delete them and we will, unless we are required to keep a record.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-paper">Contact</h2>
            <p className="mt-3">
              Privacy questions: <a href="mailto:hello@humanixsoft.com" className="text-ember">hello@humanixsoft.com</a>. See also our{' '}
              <Link to="/terms" className="text-ember">
                terms
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
