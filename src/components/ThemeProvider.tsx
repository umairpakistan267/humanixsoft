import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { applyTheme, defaultTheme, getStoredTheme, isThemeId, type ThemeId } from '../theme'

type ThemeContextValue = {
  theme: ThemeId
  setTheme: (id: ThemeId) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof document === 'undefined') return defaultTheme
    const fromDom = document.documentElement.getAttribute('data-theme')
    return fromDom && isThemeId(fromDom) ? fromDom : getStoredTheme()
  })

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: (id) => {
        applyTheme(id)
        setThemeState(id)
      },
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
