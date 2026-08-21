export const themes = [
  { id: 'ember', label: 'Ember', hint: 'Black + molten orange', group: 'dark', themeColor: '#0a0b0d', swatches: ['#0a0b0d', '#ff5c1a', '#d4a574'] },
  { id: 'cyan', label: 'Cyan', hint: 'Midnight + teal', group: 'dark', themeColor: '#05070d', swatches: ['#05070d', '#2ee6d0', '#9bb8ff'] },
  { id: 'violet', label: 'Violet', hint: 'Charcoal + purple', group: 'dark', themeColor: '#0c0d12', swatches: ['#0c0d12', '#8b6cff', '#8ea4e8'] },
  { id: 'noir', label: 'Noir', hint: 'Editorial monochrome', group: 'dark', themeColor: '#080808', swatches: ['#080808', '#f5f5f5', '#b8b8b4'] },
  { id: 'gold', label: 'Gold', hint: 'Charcoal + antique gold', group: 'dark', themeColor: '#0e0c0a', swatches: ['#0e0c0a', '#c9a227', '#d4b896'] },
  { id: 'slate', label: 'Slate', hint: 'Steel blue professional', group: 'dark', themeColor: '#0f1419', swatches: ['#0f1419', '#5b8def', '#7d93a8'] },
  { id: 'azure', label: 'Azure', hint: 'Deep navy + electric blue', group: 'dark', themeColor: '#070b16', swatches: ['#070b16', '#3b82f6', '#7aa2ff'] },
  { id: 'forest', label: 'Forest', hint: 'Pine + sage', group: 'dark', themeColor: '#0b110e', swatches: ['#0b110e', '#3d9b6d', '#a3c4b0'] },
  { id: 'wine', label: 'Wine', hint: 'Charcoal + burgundy', group: 'dark', themeColor: '#100c0e', swatches: ['#100c0e', '#b23a4c', '#c4a0a6'] },
  { id: 'light', label: 'Light', hint: 'Cool off-white + teal', group: 'light', themeColor: '#f4f7fb', swatches: ['#f4f7fb', '#0cb8a8', '#3d6bb3'] },
  { id: 'ivory', label: 'Ivory', hint: 'Warm cream + amber', group: 'light', themeColor: '#f7f1e6', swatches: ['#f7f1e6', '#b45309', '#8a6a3e'] },
  { id: 'porcelain', label: 'Porcelain', hint: 'Studio white + ink', group: 'light', themeColor: '#f7f8fa', swatches: ['#f7f8fa', '#111318', '#6b7280'] },
  { id: 'rose', label: 'Rose', hint: 'Charcoal + rose gold', group: 'dark', themeColor: '#120c10', swatches: ['#120c10', '#e8a0b4', '#d4a574'] },
  { id: 'obsidian', label: 'Obsidian', hint: 'Black + acid lime', group: 'dark', themeColor: '#070807', swatches: ['#070807', '#b6ff3b', '#8a9a7a'] },
  { id: 'mocha', label: 'Mocha', hint: 'Espresso + caramel', group: 'dark', themeColor: '#14100c', swatches: ['#14100c', '#c4783a', '#e8c9a0'] },
  { id: 'crimson', label: 'Crimson', hint: 'Black + signal red', group: 'dark', themeColor: '#0c0808', swatches: ['#0c0808', '#e11d2e', '#f5a8a8'] },
  { id: 'arctic', label: 'Arctic', hint: 'Ice navy + frost', group: 'dark', themeColor: '#071018', swatches: ['#071018', '#7dd3fc', '#e0f2fe'] },
  { id: 'linen', label: 'Linen', hint: 'Stone + navy', group: 'light', themeColor: '#efebe3', swatches: ['#efebe3', '#1e3a5f', '#8a8174'] },
  { id: 'mint', label: 'Mint', hint: 'Pale sage + forest', group: 'light', themeColor: '#eef6f1', swatches: ['#eef6f1', '#047857', '#3f6b55'] },
  { id: 'blush', label: 'Blush', hint: 'Powder rose + ink', group: 'light', themeColor: '#f8eef1', swatches: ['#f8eef1', '#9f1239', '#4a3038'] },
] as const

export type ThemeId = (typeof themes)[number]['id']

const storageKey = 'hx-theme'

export const defaultTheme: ThemeId = 'mint'

export function isThemeId(value: string): value is ThemeId {
  return themes.some((theme) => theme.id === value)
}

export function getStoredTheme(): ThemeId {
  if (typeof window === 'undefined') return defaultTheme
  const stored = localStorage.getItem(storageKey)
  return stored && isThemeId(stored) ? stored : defaultTheme
}

export function applyTheme(id: ThemeId) {
  const theme = themes.find((item) => item.id === id) ?? themes.find((item) => item.id === defaultTheme)!
  document.documentElement.setAttribute('data-theme', theme.id)
  document.documentElement.style.colorScheme = theme.group === 'light' ? 'light' : 'dark'
  localStorage.setItem(storageKey, theme.id)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme.themeColor)
  window.dispatchEvent(new Event('hx-theme'))
}
