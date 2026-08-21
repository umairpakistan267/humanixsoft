import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data'
import { ease } from '../motion'
import { Button } from './Button'
import { ForgeMark } from './ForgeMark'
import { ThemeSelect } from './ThemeSelect'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const [menuPath, setMenuPath] = useState(pathname)

  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${scrolled || open ? 'nav-blur border-b border-line' : ''}`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="HumanixSoft home" data-cursor>
          <motion.span whileHover={{ rotate: -8, scale: 1.06 }} transition={{ type: 'spring', stiffness: 300, damping: 16 }}>
            <ForgeMark className="h-9 w-9" />
          </motion.span>
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Humanix<span className="text-ember">Soft</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              data-cursor
              className={({ isActive }) =>
                `relative text-[13px] tracking-[0.08em] uppercase transition ${
                  isActive ? 'text-paper' : 'text-muted hover:text-paper'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-ember"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-ember"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeSelect />
          <Button to="/contact" className="!py-2.5 !px-5">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          className="relative h-10 w-10 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`absolute left-2 right-2 h-px bg-paper transition ${open ? 'top-5 rotate-45' : 'top-3.5'}`} />
          <span className={`absolute left-2 right-2 top-5 h-px bg-paper transition ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute left-2 right-2 h-px bg-paper transition ${open ? 'top-5 -rotate-45' : 'top-[26px]'}`} />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="nav-blur overflow-hidden border-t border-line px-5 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <nav className="flex flex-col gap-5 py-8" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -18, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.45, ease }}
                >
                  <NavLink to={link.to} className="font-display text-3xl font-semibold tracking-tight text-paper">
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <ThemeSelect className="w-full" inline />
              <Button to="/contact" className="mt-2 w-full">
                Start a project
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
