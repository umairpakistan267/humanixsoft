import { Link } from 'react-router-dom'
import { navLinks } from '../data'
import { ForgeMark } from './ForgeMark'

export function Footer() {
  const ribbon = ['HUMANIXSOFT', 'KARACHI · WORLDWIDE', 'SOFTWARE WITH INTENT']

  return (
    <footer className="border-t border-line bg-ink">
      <div className="overflow-hidden border-b border-line py-6">
        <div className="marquee-track flex items-center gap-10 px-6">
          {[...ribbon, ...ribbon, ...ribbon].map((word, i) => (
            <span key={`${word}-${i}`} className="font-display text-5xl font-extrabold tracking-tight text-paper/12 sm:text-7xl">
              {word}
              <span className="text-ember/40"> · </span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3" data-cursor>
            <ForgeMark />
            <span className="font-display text-lg font-semibold">
              Humanix<span className="text-ember">Soft</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            A product studio in Karachi, shipping for the world. We design and build software that holds — web, mobile, cloud, and AI.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-copper">Studio</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-ember" data-cursor>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="transition hover:text-ember" data-cursor>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-copper">Engage</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li>
              <Link to="/hire" className="transition hover:text-ember" data-cursor>
                Hire developers
              </Link>
            </li>
            <li>
              <Link to="/process" className="transition hover:text-ember" data-cursor>
                Process
              </Link>
            </li>
            <li>
              <Link to="/technologies" className="transition hover:text-ember" data-cursor>
                Technologies
              </Link>
            </li>
            <li>
              <Link to="/careers" className="transition hover:text-ember" data-cursor>
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-copper">Talk</p>
          <a href="mailto:hello@humanixsoft.com" className="mt-4 block text-sm text-paper/80 transition hover:text-ember" data-cursor>
            hello@humanixsoft.com
          </a>
          <p className="mt-2 text-sm text-muted">Clifton, Karachi · Worldwide remote</p>
          <p className="mt-2 text-sm text-muted">Mon–Fri, 10:00–18:00 PKT</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-line px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} HumanixSoft. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="transition hover:text-paper">
            Privacy
          </Link>
          <Link to="/terms" className="transition hover:text-paper">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
